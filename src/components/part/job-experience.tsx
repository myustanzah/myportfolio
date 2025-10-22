import JobExperienceCard from '@/components/JobExperienceCard';
import { getImagePrefix } from "../../../utils/utils";


interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  logoUrl: string;
}

const dataExperience = [
  {
    company: "Copama Jaya Global",
    role: "Fullstack Developer | Freelance",
    period: "October 2025 - Current",
    location: "Jakarta, Indonesia",
    description: `For this Company, I build and maintain system like Company Profile, Product Catalog, and E-commerce. \n`,
    logoUrl: `${getImagePrefix()}/image/blog-1.svg`,
  },
  {
    company: "PT. Nusantara Duta Solusindo",
    role: "Software Developer IBM | Fulltime",
    period: "October 2023 - Current",
    location: "Jakarta, Indonesia",
    description: `For this Company, As Software Developer until now, I was handle 3 Project. \n
        1. Migration Data (Mandiri Utama Finance). This project was migration data where the data size is 11 Terabyte. Here, i as Custom Apps Developer where this apps Monitoring the migration data. I using React JS, As Frontend. \n
        2. Upgrade version (CIMB Niaga Bank). This project was upgrade version of IBM Product Content Manager OnDemand. Function of this software is can handle massive report without delay when rendering in Browser. \n
        3. Upgrade version (Bank Woory Saudara). This project also upgrade version. however, using another IBM Product. The Product is IBM Business Automation Workflow. \n
        4. Develope Custom Apps Fee Engine (Bank CIMB Niaga). This project was develope custom apps to calculate, reporting, and Public API that was using IBM Product and Next JS. The product is IBM Business Automation Workflow as Backend and Next JS as Frontend. \n
        `,
    logoUrl: `${getImagePrefix()}/image/blog-1.svg`,
  },
  {
    company: "PT. Pohondana Indonesia",
    role: "IT Helpdesk | Fullstack Engineer | Fulltime",
    period: "Agustus 2021 - September 2023",
    location: "Jakarta, Indonesia",
    description: "Here, I did handle an existing project to manage complaint of user in daily activity. These complaint included a bug, or add new feature. and where, a new Application was also being developed. for existing Apps using Laravel as Frontend and Java Play Framework as Backend, and new Apps using React.js as Frontend and then Express.JS as Backend",
    logoUrl: `${getImagePrefix()}/image/blog-1.svg`,
  },
  {
    company: "PT. Djasa Tangguh Karyatama",
    role: "Wordpress Developer | Freelance",
    period: "Mei 2023 - Juni 2023",
    location: "Jakarta, Indonesia",
    description: "I develope Company Profile using wordpress",
    logoUrl: `${getImagePrefix()}/image/blog-1.svg`,
  },
  {
    company: "Lughatuna School",
    role: "Mobile Apps Developer | Freelance",
    period: "Mei 2023 - Desember 2023",
    location: "Jakarta, Indonesia",
    description: "Owner of Lughatuna School need to develope Application for Umrah User. It's like tour guide, script pray with sound, and tutorial dress in Mekkah. I develope using React Native and Support Platform for payment RevenueCat, also deploy at Google Play Console",
    logoUrl: `${getImagePrefix()}/image/blog-1.svg`,
  },
  {
    company: "Lughatuna School",
    role: "Fullstack Developer | Freelance",
    period: "Januari 2023 - Mei 2023",
    location: "Jakarta, Indonesia",
    description: "I build Website Daily Record Operation School According user request. Tech Stack that use was React.JS as Frontend, and Express.JS as Backend",
    logoUrl: `${getImagePrefix()}/image/blog-1.svg`,
  },
  {
    company: "Badan Meteorology, Klimatology, dan Geofisika",
    role: "VB Programmer | Internship",
    period: "September 2017 - Desember 2017",
    location: "Bengkulu, Indonesia",
    description: "Learned about daily operations at BMKG. The final project involved developing an application using Visual Basic 6 to manage incoming and outgoing mail, and to track the number of mail items.",
    logoUrl: `${getImagePrefix()}/image/blog-1.svg`,
  },
];


export default function ExperienceSection() {

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Job Experience</h2>

        <div className="max-h-[700px] overflow-y-auto space-y-6 pr-2">
          {
            dataExperience.map((experience: ExperienceProps, index) => {
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
