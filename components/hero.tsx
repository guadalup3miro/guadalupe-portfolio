export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-20 sm:px-10 sm:pt-12 sm:pb-28">
      <h1 className="max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
        Guadalupe Miró
      </h1>
      <p className="mt-4 max-w-xl text-lg font-medium sm:text-xl">
        Product designer with a graphic designer&apos;s eye.
      </p>
      <p className="mt-4 max-w-md text-muted">
        10+ years designing complex platforms simple — from AI-powered
        maintenance software and hospitality operations to crypto and
        wellness apps.
      </p>
      <a
        href="mailto:guadamiro@gmail.com"
        className="mt-6 inline-block text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
      >
        Get in touch
      </a>
    </section>
  );
}
