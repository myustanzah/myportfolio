import { Typography, Button } from "@material-tailwind/react";
import { LINK_MENU } from "./data";
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="dark:bg-black mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal dark:text-white">
            &copy; {CURRENT_YEAR} Made by{" "} Muhammad Yustanzah S.Kom
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINK_MENU.map((link, i) => (
              <li key={i}>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-normal dark:text-white hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
            <Button color="gray">subscribe</Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
