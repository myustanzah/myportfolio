"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
import JobExperienceCard from "../JobExperienceCard";

type LazyJobExperienceCardProps = ComponentProps<typeof JobExperienceCard>;

export default function LazyJobExperienceCard(props: LazyJobExperienceCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[280px] sm:min-h-[250px]">
      {shouldRender ? (
        <JobExperienceCard {...props} />
      ) : (
        <div
          aria-hidden="true"
          className="h-[250px] animate-pulse rounded-2xl border border-gray-200 bg-gray-100 dark:border-slate-800 dark:bg-slate-900/60 sm:h-[220px]"
        />
      )}
    </div>
  );
}
