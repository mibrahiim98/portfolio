import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionHeading index={1} title="Experience" tagline="Where I've built" />

      <Container className="mt-12 flex flex-col gap-6">
        {profile.experience.map((role, i) => (
          <Reveal key={role.company} as="article" delay={i * 100}>
            <div className="group rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-10">
              <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-4">
                  <span className="label-mono flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(1.9rem,8vw,3rem)] uppercase">{role.company}</h3>
                </div>
                <div className="md:text-right">
                  <p className="text-lg font-semibold">{role.title}</p>
                  <p className="label-mono mt-1 text-muted">
                    {role.period}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                </div>
              </header>

              {role.summary && <p className="mt-8 max-w-3xl text-lg text-fg/90">{role.summary}</p>}

              <div className={`mt-8 grid gap-10 ${role.achievements ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
                <ul className="flex flex-col gap-3">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                {role.achievements && (
                  <div className="self-start rounded-2xl border border-line bg-surface-2 p-6">
                    <p className="label-mono text-accent">Key achievements</p>
                    <ul className="mt-4 flex flex-col gap-4">
                      {role.achievements.map((item) => (
                        <li key={item} className="leading-relaxed text-fg/90">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6" aria-label="Tech stack">
                {role.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
