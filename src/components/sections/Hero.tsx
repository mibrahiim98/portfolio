import Image from "next/image";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const [first, ...rest] = profile.shortName.split(" ");

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="label-mono flex items-center gap-3 text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.title} · {profile.location}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display mt-6 text-[clamp(3.2rem,9vw,7.5rem)] uppercase">
              {first}
              <br />
              <span className="text-outline">{rest.join(" ")}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href={profile.cvPath}
              download
              className="rounded-full border border-line-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Download CV ↓
            </a>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-14 grid max-w-xl grid-cols-3 border-t border-line pt-6">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse justify-end">
                  <dt className="label-mono mt-2 text-faint">{stat.label}</dt>
                  <dd className="font-display text-3xl sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line-strong bg-surface">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={900}
              height={1353}
              sizes="(min-width: 1024px) 40vw, 90vw"
              loading="eager"
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-bg/90 to-transparent px-5 pt-16 pb-5">
              <span className="label-mono text-fg">React · TS · Next.js</span>
              <span className="label-mono text-accent">KSA</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
