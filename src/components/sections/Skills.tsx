import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <SectionHeading index={3} title="Skills" tagline="Tools of the trade" />

      <Container className="mt-6">
        <ul>
          {profile.skills.map((group, i) => (
            <Reveal
              key={group.category}
              as="li"
              delay={i * 50}
              className="group grid gap-4 border-b border-line py-7 md:grid-cols-[18rem_1fr] md:items-center"
            >
              <h3 className="font-display text-xl uppercase text-muted transition-colors group-hover:text-fg sm:text-2xl">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition-colors group-hover:border-line-strong group-hover:text-fg"
                  >
                    {skill}
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
