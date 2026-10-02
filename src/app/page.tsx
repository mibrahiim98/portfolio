import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Leadership } from "@/components/sections/Leadership";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Highlights />
        <Skills />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
