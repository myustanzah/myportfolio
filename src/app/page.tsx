"use client"
import { useEffect } from "react";
import Cookies from "js-cookie";

import Contact from "@/feature/Contact/views/ContactVIew";
import Footer from "@/components/Footer";
import Navbar from "@/feature/Navbar/views/NavbarView";
import Hero from "@/feature/Hero/views/HeroView";
import Projects from "@/feature/Projects/views/ProjectView";
import JobExperience from "@/feature/JobExperience/views/JobExperienceView";
import Skills from "@/feature/Skills/views/SkillsView";
import Resume from "@/feature/Resume/views/ResumeView";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Portfolio() {

  useEffect(()=>{
    const alreadyNotified = Cookies.get('notified');
    if (!alreadyNotified) {
      fetch('/api/sendNotif', {
        method: 'POST',
      }).then((res) => {
        Cookies.set('notified', 'true', { expires: 1 }); // 1 hari
      });
    }
  }, [])

  return (
    <div className="dark:bg-black">
      <ParticlesBackground/>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <JobExperience />
      <Resume />
      <Contact />
      <Footer /> 
    </div>
  );
}
