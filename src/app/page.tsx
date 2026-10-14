import ContactForm from "@/components/contact/contackForm";
import Education from "@/components/education/education";
import Hero from "@/components/home/hero-top";
import Projects from "@/components/project/projects";
import Skills from "@/components/skills/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Hero></Hero>
     {/* Projects */}
     <Projects></Projects>
     <Skills></Skills>

   
    <div>
      <Education></Education>
    </div>
     <div className=" grid  gap-1 pt-3 justify-center items-center">
       <h1 className="text-4xl font-bold">Get In Touch
      </h1>
     <h4 className="">Have a question, an idea, or a collaboration opportunity? Let's talk.</h4>
    </div>
     <ContactForm></ContactForm>

    </div>
  );
}
