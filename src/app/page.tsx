"use client"
// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/part/hero";
// import Clients from "../components/part/clients";
import Skills from "../components/part/skills";
import Projects from "../components/part/projects";
import Resume from "../components/part/resume";
// import Experience from "../components/part/experience";
// import PopularClients from "../components/part/popular-clients";
import JobExperience from "@/components/part/job-experience"
import ContactForm from "../components/part/contact-form";
import ParticlesBackground from "@/components/ParticleBackground";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Portfolio() {

  useEffect(()=>{
    const alreadyNotified = Cookies.get('notified');

    if (!alreadyNotified) {
      fetch('/api/sendNotif', {
        method: 'POST',
      }).then((res) => {
        // window.alert(JSON.stringify(res.json()))
        // Set cookie untuk menandai sudah dikirimi notifikasi
        Cookies.set('notified', 'true', { expires: 1 }); // 1 hari
      });
    }
   
  }, [])

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
