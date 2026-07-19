export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-20 sm:px-10 sm:pt-12 sm:pb-28">
      <p className="text-sm text-muted">Product designer</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
        Guadalupe Miró
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        I design digital products end to end — research, flows, and
        interfaces for fintech, wellness, and consumer apps.
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
