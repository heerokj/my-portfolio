import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <section
        id="main"
        className="min-h-screen flex items-center justify-center"
      >
        {/* 물결 배경 */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="wave -one absolute top-[20%] left-[50%] bg-[#f8cdda] w-[200vw] h-[225vw] ml-[-100vw] mt-[-196vw] rounded-[40%] opacity-25 animate-wave-one"></div>
          <div className="wave -two absolute top-[20%] left-[50%] bg-[#fbd3e9] w-[200vw] h-[225vw] ml-[-100vw] mt-[-196vw] rounded-[40%] opacity-25 animate-wave-two"></div>
          <div className="wave -three absolute top-[20%] left-[50%] bg-[#fceabb] w-[200vw] h-[225vw] ml-[-100vw] mt-[-196vw] rounded-[40%] opacity-25 animate-wave-three"></div>
          <div className="wave -three absolute top-[20%] left-[50%] bg-[#d291bc] w-[200vw] h-[225vw] ml-[-100vw] mt-[-196vw] rounded-[40%] opacity-25 animate-wave-three"></div>
        </div>

        <Main />
      </section>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <AboutMe />
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <Projects />
      </section>
      <section
        id="career"
        className="min-h-screen flex items-center justify-center"
      >
        <Career />
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center"
      >
        <Contact />
      </section>
    </>
  );
}
