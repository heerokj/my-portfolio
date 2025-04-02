import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <section id="main" className="bg-amber-100 min-h-screen">
        <Main />
      </section>
      <section id="about" className="bg-amber-200 min-h-screen">
        <AboutMe />
      </section>
      <section id="skills" className="bg-amber-300 min-h-screen">
        <Skills />
      </section>
      <section id="projects" className="bg-amber-400 min-h-screen">
        <Projects />
      </section>
      <section id="career" className="bg-amber-500 min-h-screen">
        <Career />
      </section>
      <section id="contact" className="bg-amber-600 min-h-screen">
        <Contact />
      </section>
    </>
  );
}
