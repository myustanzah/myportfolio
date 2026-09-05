import JobExperienceCard from './components/JobExperienceCard';
import { JobExperienceProps } from './props';
import { dataExperience } from './data';


export default function ExperienceSection() {

  return (
    <section id="section-jobexperience" className="bg-white px-6 py-20 dark:bg-[#080b12] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Career journey
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Job Experience
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-right">
            The roles and projects that shaped my experience as a developer.
          </p>
        </div>

        <div className="relative space-y-6 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:w-px before:bg-gradient-to-b before:from-blue-500 before:via-indigo-300 before:to-transparent dark:before:via-blue-900 sm:space-y-8 sm:before:left-6">
          {
            dataExperience.map((experience: JobExperienceProps.Experience, index) => {
                return (
                  <JobExperienceCard
                    key={index}
                    index={index + 1}
                    company={experience.company}
                    role={experience.role}
                    period={experience.period}
                    location={experience.location}
                    description={experience.description}
                    logoUrl={experience.logoUrl}
                  />
                )
              })
            }
        </div>
      </div>
    </section>
  );
}
