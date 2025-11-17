"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "@/helper/utils";
import { useState } from "react";

interface HeroProps {
    name: string;
    value: any;
}

function Hero() {
  const [email, setEmail] = useState<string>("");

  function handleEmailChange(e: any){
    let { name, value } : HeroProps = e.target;
    setEmail(value);
  }

  function handleSubmit(){
    window.location.href = `mailto:muhammadyustanzah@gmail.com?body=Hallo%20Yus%20!`;
  }

  return (
    <header className="dark:bg-black bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            // color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl text-gray-900 dark:text-white"
          >
            Welcome to My Software <br /> Development Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 text-gray-500 dark:text-white md:pr-16 xl:pr-28"
          >
            I&apos;m Muhamad Yustanzah Qurniawan, a passionate Fullstack Developer | Software Developer based in Bogor. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 dark:text-gray-100 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" onChange={handleEmailChange} />
              <Button color="gray" className="w-full px-4 md:w-[12rem]" onClick={handleSubmit}>
                require offer
              </Button>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          // src={`${getImagePrefix()}image/image-7.svg`}
          src={`${getImagePrefix()}image/avatar1.jpg`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
