"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { portfolioData } from "./props";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ProjectDetailView({ params }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = useMemo(() => {
    return portfolioData[params.slug];
  }, [params.slug]);

  const images = useMemo(() => {
    return project?.images?.length
      ? project.images
      : project?.image
      ? [project.image]
      : [];
  }, [project]);
  
  const totalImages = useMemo(() => images.length, [images]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Project Not Found
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!project || images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <Link
          href="/"
          className="inline-block mb-8 text-blue-600 hover:underline"
        >
          ← Back to Portfolio
        </Link>
        <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-gray-800 mb-4">
          {project.title}
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8">
          {project.description}
        </motion.p>
        {/* Image Slider */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              sizes="100vw"
              priority
              className="object-contain transition-opacity duration-300"
            />

            {/* Navigation Buttons */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {totalImages}
                </div>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition ${
                        index === currentImageIndex
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            {project.tech.map((item: string, index: number) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <motion.ul variants={staggerContainer} className="list-disc list-inside space-y-2 text-gray-700">
            {project.features.map((feature: string, index: number) => (
              <motion.li variants={fadeInUp} key={index}>{feature}</motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
            href={project.github}
            target="_blank"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition"
          >
            View Source Code
          </Link>
          </motion.div>
          {/* <Link
            href={project.demo}
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition"
          >
            Live Demo
          </Link> */}
        </motion.div>
      </motion.div>
    </section>
  );
}