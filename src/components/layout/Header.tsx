"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "border-b border-line bg-bg"
          : scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-display text-xl" aria-label={`${profile.shortName} — back to top`}>
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {profile.nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="label-mono text-muted transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={asset(profile.cvPath)}
            download
            className="label-mono rounded-full border border-line-strong px-4 py-2 text-fg transition-colors hover:border-accent hover:text-accent"
          >
            CV ↓
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="label-mono hidden text-muted transition-colors hover:text-fg xl:inline"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line-strong lg:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-fg transition-transform ${open ? "rotate-45" : "-translate-y-1"}`}
            />
            <span
              className={`absolute h-px w-4 bg-fg transition-transform ${open ? "-rotate-45" : "translate-y-1"}`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[28rem]" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6 sm:px-8">
          {profile.nav.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-line py-3"
              >
                <span className="label-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl uppercase">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
