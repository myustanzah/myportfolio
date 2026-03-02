import { getImagePrefix } from "@/helper/utils"

interface PortfolioItem {
  title: string
  description: string
  image: string
  tech: string[]
  features: string[]
  github: string
  demo: string
}

export const portfolioData: Record<string, PortfolioItem> = {
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    image: `/image/mobile-app.svg`,
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
    image: `/image/landing-page.svg`,
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
    image: `/image/ecommers.svg`,
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
    image: `/image/ibm.svg`,
    tech: ["IBM BAW", "IBM CMOD", "IBM Filenet", "IBM CP4BA", "WatsonX AI", "AIX", "AS400" ],
    features: [
      "Businees Automation Workflow",
      "File Document Management System",
      "Secure Systems",
    ],
    github: "https://github.com/myustanzah",
    demo: "https://demo.yoursite.com",
  },
};

