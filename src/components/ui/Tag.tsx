type TagProps = {
  children: string;
  variant?: "default" | "accent";
};

export function Tag({ children, variant = "default" }: TagProps) {
  const styles =
    variant === "accent"
      ? "border-accent/40 bg-accent-soft text-fg"
      : "border-line-strong text-muted hover:border-accent/60 hover:text-fg";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm transition-colors ${styles}`}>
      {children}
    </span>
  );
}
