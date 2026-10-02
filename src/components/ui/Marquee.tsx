type MarqueeProps = {
  items: string[];
  variant?: "solid" | "outline";
  reverse?: boolean;
};

function Star() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-[0.55em] w-[0.55em] shrink-0 fill-accent">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

/** Infinite horizontal ticker. The list is rendered twice so the -50% loop is seamless. */
export function Marquee({ items, variant = "solid", reverse = false }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="group relative flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className={`flex w-max shrink-0 items-center gap-8 pr-8 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {track.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className={`font-display flex items-center gap-8 whitespace-nowrap text-4xl uppercase sm:text-6xl lg:text-7xl ${
              variant === "outline" ? "text-outline" : "text-fg"
            }`}
          >
            {item}
            <Star />
          </li>
        ))}
      </ul>
    </div>
  );
}
