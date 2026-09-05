"use client";

import { CertificateItem } from "./components/CertificateItems";
import { CERTIFICATE_ITEMS } from "./data";
import Link from "next/link";



export function Certificate() {
  return (
    <section id="section-certificate" className="bg-gray-50 px-6 py-20 dark:bg-[#080b12] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              My achievements
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Certificates
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-right">
            A collection of certifications and learning milestones I have completed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATE_ITEMS.map((props, idx) => (
            <Link
              href={props.imgPath}
              key={props.children.toString()}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <CertificateItem {...props} index={idx + 1} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
