"use client";

import { Typography } from "@material-tailwind/react";
import { SkillCard } from "./components/SkillCards";
import { SKILLS } from "./data";
import { useTheme } from "@/context/CustomContextProvider";


export function Skills() {
  const theme = useTheme();


  return (  
    <section className="dark:bg-black px-8">
      <div id="skills-sections" className="container dark:bg-black bg-white mx-auto mb-20 text-center">
        <Typography variant="h2" className="dark:text-white text-black mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h4" className="dark:text-white text-gray-500 mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container dark:bg-black bg-white mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
