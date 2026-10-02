import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-6">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="label-mono text-faint">
          © {year} {profile.name} — {profile.location}
        </p>
      </Container>
    </footer>
  );
}
