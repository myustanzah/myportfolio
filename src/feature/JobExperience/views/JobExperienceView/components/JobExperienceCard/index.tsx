import { FC } from 'react';
import Image from 'next/image';

interface JobExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  logoUrl?: string;
}

const JobExperienceCard: FC<JobExperienceCardProps> = ({
  company,
  role,
  period,
  location,
  description,
  logoUrl,
}) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition duration-300 ease-in-out whitespace-pre-line">
      {logoUrl && (
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
          <Image
            src={logoUrl}
            alt={`${company} logo`}
            width={64}
            height={64}
            className="rounded-md object-contain"
          />
        </div>
      )}
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800">{role}</h3>
        <div className="flex flex-wrap text-sm text-gray-500 mb-2">
          <span className="mr-4">{company}</span>
          <span className="mr-4">{period}</span>
          {location && <span>{location}</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default JobExperienceCard;
