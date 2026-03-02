import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "./props";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailView({ params }: ProjectDetailProps) {
  const project = portfolioData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Project Not Found
      </div>
    );
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
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
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