// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
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
      <Resume />
      {/* <Testimonial /> */}
      <PopularClients />
      <ContactForm />
      <Footer />
    </>
  );
}
