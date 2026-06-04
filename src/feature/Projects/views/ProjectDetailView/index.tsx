"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolioData } from "./props";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

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
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-blue-600 hover:underline"
        >
          ← Back to Portfolio
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {project.title}
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          {project.description}
        </p>
        {/* Image Slider */}
        <div className="mb-10">
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
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((item: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {project.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <Link
            href={project.github}
            target="_blank"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition"
          >
            View Source Code
          </Link>
          {/* <Link
            href={project.demo}
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition"
          >
            Live Demo
          </Link> */}
        </div>
      </div>
    </section>
  );
}