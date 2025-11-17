"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "./components/ResumeItems";
import { RESUME_ITEMS } from "./data";



export function Resume() {

  const handleOpenPdf = () => {
    window.open('/pdf/UpdateResume.pdf', '_blank');
  };

  return (
    <section className="px-8 dark:bg-black py-24">
      <div className="container dark:bg-black bg-white mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" className="dark:text-white">
            MY RESUME
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
            onClick={handleOpenPdf}
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 dark:text-white text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <a href={props.imgPath} key={idx} target="_blank">
              <ResumeItem {...props} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
