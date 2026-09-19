"use client";

import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

const SEEK_SECONDS = 10;

// Responsive Vimeo embed — a fluid 16:9 wrapper (no fixed width/height) so
// it sits in the gallery grid the same way a photo does.
//
// Two variants:
//  - Default: normal player chrome, controls visible, no autoplay — can be
//    paused and heard. Just the title/byline/portrait overlay stripped for
//    a cleaner frame.
//  - `background`: chrome-free, silent autoplay loop, not clickable/
//    pausable (`pointer-events-none` on the iframe). This does NOT use
//    Vimeo's own `?background=1` param, even though the name matches it —
//    that mode turns out to silently ignore the SDK's `play()` command
//    (confirmed: `setCurrentTime()` works fine over the same postMessage
//    channel, so the channel itself isn't the problem, `background=1`
//    specifically seems to make play/pause commands inert). That breaks
//    the "start playing on arrival" requirement on a client-side route
//    transition (Link click, no full reload) — the iframe's own
//    `autoplay=1` is a fire-once attempt at initial load that can lose the
//    race or get silently blocked, and with `background=1` there was no
//    way to force a retry after the fact. So instead: `controls=0` (hides
//    all native UI, same visual result) + autoplay/loop/muted/title/
//    byline/portrait/badge params, PLUS an explicit `player.play()` once
//    the SDK reports ready — which *is* a real, honored command in this
//    mode, so it reliably recovers a soft-navigation that landed paused.
//
//    Trade-off vs. a plain (non-`background`) player: no play/pause of its
//    own and no sound — fine for a muted loop, wrong if the video has
//    audio that matters or needs a deliberate "press play" moment. For
//    that case, drop `background` and pair a normal embed with your own
//    play button overlay that calls `play()` on click.
//
// `hoverSeekControls` (opt-in, default off — only Pogo TV uses it today):
// adds two ±10s overlay buttons, faded in on hover, that drive the video
// via the @vimeo/player SDK (needed regardless of `background`, since a
// chrome-free iframe has no native controls to click, but works the same
// way against a normal player too). Positioned bottom-left specifically so
// they never sit under Pogo TV's own baked-in heart/clock/share/</> icons
// in the top-right of the frame.
export default function VideoEmbed({
  vimeoId,
  title = "Video",
  background = false,
  hoverSeekControls = false,
  rounded = false,
}: {
  vimeoId: string;
  title?: string;
  background?: boolean;
  hoverSeekControls?: boolean;
  // Opt-in rounded corners (16px, matching the gallery thumbnails below) --
  // the wrapper already has overflow-hidden, so this clips the iframe
  // itself, not just its box, meaning the rounding still shows while the
  // video is playing rather than just on a static placeholder.
  rounded?: boolean;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  // Need the SDK instance for hover-seek regardless, but *also* whenever
  // `background` is on, to force-start playback (see the big comment
  // above for why the URL's own autoplay isn't reliable enough alone).
  const needsPlayer = hoverSeekControls || background;

  useEffect(() => {
    if (!needsPlayer || !iframeRef.current) return;
    // Guarded by playerRef itself (not a separate flag): React's dev-mode
    // double-invoke of effects (mount → cleanup → mount) would otherwise
    // construct a *second* Player against the same iframe, and the two
    // instances fight over the same postMessage channel -- so skip
    // creating a second one if one's already attached (the ref persists
    // across the double-invoke since it's tied to the component instance,
    // not the individual effect run).
    if (playerRef.current) return;
    const player = new Player(iframeRef.current);
    playerRef.current = player;
    if (background) {
      player
        .ready()
        .then(() => player.play())
        .catch(() => {});
    }
    // Deliberately NOT destroying the player on cleanup: @vimeo/player's
    // destroy() physically removes the iframe it's attached to from the
    // DOM, which is fine on a real unmount but disastrous paired with the
    // double-invoke above -- the iframe would vanish and never come back,
    // since React's reconciler doesn't know it needs to re-insert it. The
    // iframe itself is React-managed (JSX), so it's already torn down
    // correctly on a real unmount without our help.
  }, [needsPlayer, background]);

  const seek = async (delta: number) => {
    const player = playerRef.current;
    if (!player) return;
    try {
      const [current, duration] = await Promise.all([player.getCurrentTime(), player.getDuration()]);
      const next = Math.min(Math.max(current + delta, 0), duration);
      await player.setCurrentTime(next);
    } catch {
      // Player not ready yet or the API call failed — ignore, next hover
      // click will just try again.
    }
  };

  const src = background
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1`
    : `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&dnt=1`;

  return (
    <div
      className={`relative aspect-[16/9] w-full overflow-hidden ${hoverSeekControls ? "group" : ""} ${rounded ? "rounded-2xl" : ""}`}
    >
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        className={`absolute inset-0 h-full w-full ${background ? "pointer-events-none" : ""}`}
      />
      {hoverSeekControls && (
        <div className="pointer-events-none absolute bottom-4 left-4 flex gap-3 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
          <button
            type="button"
            onClick={() => seek(-SEEK_SECONDS)}
            aria-label={`Back ${SEEK_SECONDS} seconds`}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 6l-7 6 7 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => seek(SEEK_SECONDS)}
            aria-label={`Forward ${SEEK_SECONDS} seconds`}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 6l7 6-7 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
