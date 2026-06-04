import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    }
  },
  plugins: [],
} satisfies Config;

export default withMT(config);






