import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";
import "./globals.css";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain when publishing
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${profile.shortName} — ${profile.title}`,
  description: profile.intro,
  authors: [{ name: profile.name }],
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Riyadh", "Saudi Arabia", profile.name],
  openGraph: {
    type: "profile",
    title: `${profile.shortName} — ${profile.title}`,
    description: profile.intro,
    images: [{ url: asset(profile.photo), width: 900, height: 1353, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: `${profile.shortName} — ${profile.title}`,
    description: profile.intro,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="grain min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
