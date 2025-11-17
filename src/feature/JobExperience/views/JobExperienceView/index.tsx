import JobExperienceCard from './components/JobExperienceCard';
import { JobExperienceProps } from './props';
import { dataExperience } from './data';


export default function ExperienceSection() {

  return (
    <section id="section-jobexperience" className="dark:bg-black bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl dark:text-white font-bold text-center mb-10">JOB EXPERIENCE</h2>
        <div className="max-h-[700px] overflow-y-auto space-y-6 pr-2">
          {
            dataExperience.map((experience: JobExperienceProps.Experience, index) => {
                return (
                  <JobExperienceCard
                    key={index}
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
