"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const CLIENTS = [
  "java",
  "spring",
  "oracle",
  "express",
  "nodejs",
  "kubernetes",
  "docker",
  "nextjs",
  "sequelize",
  "ibm",
  "android",
  "postgre",
  "mongo"
];

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            TECH STACK
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            We use many Technology <br /> for Good Quality
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={480}
              height={480}
              src={`${getImagePrefix()}logos/logo-${logo}.png`}
              className="w-40 grayscale opacity-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
