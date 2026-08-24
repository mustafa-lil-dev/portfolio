import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Core } from "@/components/sections/core";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { HowIBuild } from "@/components/sections/how-i-build";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Core />
      <Skills />
      <Experience />
      <HowIBuild />
      <Contact />
      <Footer />
    </main>
  );
}
