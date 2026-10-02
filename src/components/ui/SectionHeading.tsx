import { Container } from "./Container";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: number;
  title: string;
  tagline: string;
};

/** Numbered, oversized section title with a mono tagline — e.g. "01 EXPERIENCE". */
export function SectionHeading({ index, title, tagline }: SectionHeadingProps) {
  return (
    <Container>
      <Reveal className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-end gap-3">
          <span className="label-mono pb-1 text-accent">{String(index).padStart(2, "0")}</span>
          <h2 className="font-display text-[clamp(2rem,9vw,4.5rem)] uppercase">{title}</h2>
        </div>
        <p className="label-mono text-muted">{tagline}</p>
      </Reveal>
    </Container>
  );
}
