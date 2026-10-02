import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <SectionHeading index={5} title="Education" tagline="Foundations" />

      <Container className="mt-6">
        <ul>
          {profile.education.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 100}
              className="grid gap-6 border-b border-line py-10 md:grid-cols-[14rem_1fr]"
            >
              <p className="label-mono text-muted">{item.period}</p>
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">{item.title}</h3>
                <p className="mt-2 text-muted">{item.institution}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex gap-3 text-fg/90">
                      <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>

                {item.projects && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {item.projects.map((p) => (
                      <div key={p.name} className="rounded-2xl border border-line bg-surface p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-lg font-semibold">{p.name}</h4>
                          {p.url && (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="label-mono shrink-0 text-accent hover:underline"
                              aria-label={`Visit ${p.name}`}
                            >
                              Live ↗
                            </a>
                          )}
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                        <p className="label-mono mt-4 text-faint">{p.stack.join(" · ")}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal as="li" className="grid gap-6 py-10 md:grid-cols-[14rem_1fr]">
            <p className="label-mono text-muted">Languages</p>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {profile.languages.map((lang) => (
                <li key={lang.name}>
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-muted"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </ul>
      </Container>
    </section>
  );
}
