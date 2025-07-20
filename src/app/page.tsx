// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/part/hero";
import Clients from "../components/part/clients";
import Skills from "../components/part/skills";
import Projects from "../components/part/projects";
import Resume from "../components/part/resume";
// import Experience from "../components/part/experience";
// import PopularClients from "../components/part/popular-clients";
import JobExperience from "@/components/part/job-experience"
import ContactForm from "../components/part/contact-form";
import ParticlesBackground from "@/components/ParticleBackground";

export default function Portfolio() {
  return (
    <>
      <ParticlesBackground/>
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <Skills />
      <Projects />
      <JobExperience />
      <Resume />
      
      {/* <PopularClients /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
