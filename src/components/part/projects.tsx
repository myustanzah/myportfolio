"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/mobile-app.png`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: `${getImagePrefix()}image/landing-page.png`,
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: `${getImagePrefix()}image/ecommers.png`,
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
  {
    img: `${getImagePrefix()}image/ibm-logo-2.webp`,
    title: "IBM Product",
    desc: "IBM Product handle many project like Cloud Computing, Artificial Intelegent (AI) Business Automation, Data Analitics, and Cyber Security." ,
  },
  
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container bg-white mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
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
      <div className="container bg-white mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
