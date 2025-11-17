"use client";

import { ProjectCard } from "./components/ProjectCard";
import { Typography } from "@material-tailwind/react";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <section id="section-myproject" className="dark:bg-black py-28 px-8">
      <div className="container dark:bg-black bg-white mx-auto mb-20 text-center">
        <Typography variant="h2" className="dark:text-white mb-4">
          MY PROJECTS
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container dark:bg-black bg-white mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
