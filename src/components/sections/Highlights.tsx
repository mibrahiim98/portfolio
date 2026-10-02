import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Highlights() {
  return (
    <section id="highlights" className="py-24 sm:py-32">
      <SectionHeading index={2} title="Highlights" tagline="Work I'm proud of" />

      <div className="mt-12 flex flex-col gap-2" aria-hidden>
        <Marquee items={profile.marquee.primary} />
        <Marquee items={profile.marquee.secondary} variant="outline" reverse />
      </div>

      <Container className="mt-16">
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {profile.highlights.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 100} className="flex flex-col bg-bg p-8">
              <span className="label-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-2xl font-bold leading-tight">{item.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted">{item.description}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
