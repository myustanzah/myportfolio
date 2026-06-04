import { getImagePrefix } from "@/helper/utils"

interface PortfolioItem {
  title: string
  description: string
  image: string
  images: string[]
  tech: string[]
  features: string[]
  github: string
  demo: string
}

export const portfolioData: Record<string, PortfolioItem> = {
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    image: `/image/mobile-apps/mobile-app.svg`,
    images: [`/image/mobile-apps/mobile-app.svg`],
    tech: ["React Native", "Flutter", "Node.js", "Java", "MongoDB", "PostgreSQL", "RevenueCat"],
    features: [
      "JWT Authentication & Authorization",
      "Role-Based Access Control",
      "Google Cloud Console Deployment",
      "In-App Purchases with RevenueCat",
    ],
    github: "https://github.com/myustanzah",
    demo: "https://demo.yoursite.com",
  },
   "landing-page-development": {
    title: "Landing Page Development",
    description: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    image: `/image/landing-page/landing-page.svg`,
    images: [`/image/landing-page/landing-page.svg`],
    tech: ["React", "Next.js", "Tailwind CSS", "WordPress"],
    features: [
      "Optimize SEO",
      "Responsive Design",
      "Form Development",
      "Google Analytics Integration",
      "Google Search Console Optimization",
    ],
    github: "https://github.com/myustanzah",
    demo: "https://demo.yoursite.com",
  },
  "e-commerce-development": {
    title: "E-commerce Development",
    description: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    image: `/image/ecommers/e-commerce.svg`,
    images: [`/image/ecommers/e-commerce.svg`],
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "GCP"],
    features: [
      "JWT Authentication & Authorization",
      "Role-Based Access Control",
      "Dockerized Deployment",
      "API Documentation (Swagger)",
    ],
    github: "https://github.com/myustanzah",
    demo: "https://demo.yoursite.com",
  },
   "ibm-product": {
    title: "IBM Product",
    description: "IBM Product handle many project like Cloud Computing, Artificial Intelegent (AI) Business Automation, Data Analitics, and Cyber Security.",
    image: `/image/ibm/ibm.svg`,
    images: [`/image/ibm/ibm.svg`],
    tech: ["IBM BAW", "IBM CMOD", "IBM Filenet", "IBM CP4BA", "WatsonX AI", "AIX", "AS400" ],
    features: [
      "Businees Automation Workflow",
      "File Document Management System",
      "Secure Systems",
    ],
    github: "https://github.com/myustanzah",
    demo: "https://demo.yoursite.com",
  },
  "parking-violation-app": {
    title: "Parking Violation App",
    description: "App for reporting and managing parking violations in the city.",
    image: `/image/parking-violation.png`,
    images: [`/image/parking/parking-violation.png`, `/image/parking/parking1.png`, `/image/parking/parking2.png`, `/image/parking/parking3.png`],
    tech: ["Next.js", "TanStack Query", "Golang", "GORM", "JWT", "PostgreSQL"],
    features: [
      "User Authentication",
      "Violation Reporting",
      "Admin Dashboard",
      "Member Dashboard",
      "Notifications",
    ],
    github: "https://github.com/myustanzah",
    demo: "https://demo.yoursite.com",
  }
};

