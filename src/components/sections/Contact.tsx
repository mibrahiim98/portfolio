import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]"
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="label-mono text-muted">
            <span className="text-accent">06</span> · Have a frontend role or project in mind?
          </p>
        </Reveal>

        <Reveal delay={100}>
          <a
            href={`mailto:${profile.email}`}
            className="font-display group mt-8 inline-block text-[clamp(3.5rem,13vw,11rem)] uppercase transition-colors hover:text-accent"
          >
            Let&apos;s talk
            <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
              ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-lg text-muted underline-offset-8 hover:text-fg hover:underline sm:text-xl"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={300} className="mt-12 flex flex-wrap justify-center gap-3">
          {profile.socials
            .filter((s) => s.label !== "Email")
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {s.label} ↗
              </a>
            ))}
          <a
            href={profile.cvPath}
            download
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Download CV ↓
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
