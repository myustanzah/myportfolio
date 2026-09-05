import { FC } from 'react';
import Image from 'next/image';
import { MapPinIcon, CalendarDaysIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface JobExperienceCardProps {
  index: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  logoUrl?: string;
}

const JobExperienceCard: FC<JobExperienceCardProps> = ({
  index,
  company,
  role,
  period,
  location,
  description,
  logoUrl,
}) => {
  const isCurrent = period.toLowerCase().includes('current');

  return (
    <article className="group relative flex gap-4 sm:gap-6">
      <div className="relative z-10 mt-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-600/25 dark:border-[#080b12] dark:bg-blue-500 sm:h-12 sm:w-12">
        {String(index).padStart(2, '0')}
      </div>

      <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-900/10 dark:border-slate-800 dark:bg-[#111827] dark:shadow-black/20 dark:group-hover:border-blue-800 dark:group-hover:shadow-blue-950/30 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          {logoUrl && (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 p-2 ring-1 ring-blue-100 dark:from-blue-950/80 dark:to-indigo-950/80 dark:ring-blue-900">
          <Image
            src={logoUrl}
            alt={`${company} logo`}
            width={64}
            height={64}
            className="h-full w-full rounded-md object-contain"
          />
        </div>
      )}
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                {isCurrent ? 'Currently working' : 'Previous role'}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                {company}
              </span>
            </div>
            <h3 className="text-xl font-bold leading-7 text-gray-900 dark:text-white sm:text-2xl">{role}</h3>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5"><CalendarDaysIcon className="h-4 w-4 text-blue-500" />{period}</span>
              {location && <span className="inline-flex items-center gap-1.5"><MapPinIcon className="h-4 w-4 text-blue-500" />{location}</span>}
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-5 dark:border-slate-800">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <BriefcaseIcon className="h-4 w-4 text-indigo-500" />
            Responsibilities &amp; projects
          </div>
          <p className="whitespace-pre-line text-sm leading-7 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default JobExperienceCard;
