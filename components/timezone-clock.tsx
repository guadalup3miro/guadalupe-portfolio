"use client";

import { useEffect, useState } from "react";

type TimeParts = {
  hour: number;
  minute: number;
  second: number;
  digital: string;
  gmt: string;
};

const initialTime: TimeParts = {
  hour: 0,
  minute: 0,
  second: 0,
  digital: "00:00:00",
  gmt: "",
};

function getTimeParts(timeZone: string): TimeParts {
  const now = new Date();

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const get = (type: string) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0);

  const offsetParts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  }).formatToParts(now);
  const offsetRaw =
    offsetParts.find((part) => part.type === "timeZoneName")?.value ?? "GMT";
  const offset = offsetRaw.replace("GMT", "").trim();

  const hour = get("hour");
  const minute = get("minute");
  const second = get("second");

  return {
    hour,
    minute,
    second,
    digital: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`,
    gmt: offset ? `${offset} GMT` : "GMT",
  };
}

export default function TimezoneClock({
  city,
  countryCode,
  timeZone,
}: {
  city: string;
  countryCode: string;
  timeZone: string;
}) {
  // Starts at a static placeholder so server and first client render match,
  // then corrects to the real time on mount — avoids a hydration mismatch.
  const [time, setTime] = useState<TimeParts>(initialTime);

  useEffect(() => {
    // Syncing to a real-world clock tick, not derived render state — the
    // immediate call corrects the placeholder as soon as we're on the
    // client, then the interval keeps it ticking every second.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(getTimeParts(timeZone));
    const interval = setInterval(() => setTime(getTimeParts(timeZone)), 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const hourAngle = ((time.hour % 12) + time.minute / 60) * 30;
  const minuteAngle = (time.minute + time.second / 60) * 6;

  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 text-foreground">
        <circle
          cx="40"
          cy="40"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
          // viewBox is 80 units mapped down to a 56px (h-14) box, a scale
          // of 0.7 — strokeWidth="1" alone would render at ~0.7px on
          // screen, which read as a barely-there hairline. 1.5 lands it at
          // an actual 1px.
          strokeWidth="1.5"
        />
        <line
          x1="40"
          y1="40"
          x2="40"
          y2="22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${hourAngle} 40 40)`}
        />
        <line
          x1="40"
          y1="40"
          x2="40"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${minuteAngle} 40 40)`}
        />
        <circle cx="40" cy="40" r="2" fill="currentColor" />
      </svg>
      <div>
        <p className="text-sm font-normal">{city}</p>
        <p className="text-[11px] uppercase tracking-wide text-foreground">
          {countryCode}
        </p>
        <p className="mt-1 text-sm text-foreground">{time.digital}</p>
        <p className="text-[11px] text-foreground">{time.gmt}</p>
      </div>
    </div>
  );
}
