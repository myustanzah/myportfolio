"use client"
import { useEffect } from "react";
import { motion } from "framer-motion";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

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
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Navbar />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <Skills />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <Projects />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <JobExperience />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <Resume />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <Contact />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
        <Footer />
      </motion.div>
    </div>
  );
}
