import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32">
      <SectionHeading index={4} title="Leadership" tagline="Growing the team" />

      <Container className="mt-12">
        <ul className="grid gap-6 md:grid-cols-2">
          {profile.leadership.map((item, i) => (
            <Reveal
              key={item.label}
              as="li"
              delay={i * 100}
              className="rounded-3xl border border-line bg-surface p-8 sm:p-10"
            >
              <span className="label-mono text-accent">{item.label}</span>
              <p className="mt-6 text-xl leading-relaxed sm:text-2xl">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
