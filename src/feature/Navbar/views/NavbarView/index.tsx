import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import ThemeSwitch from "@/components/ThemeSwitch";

import NavItem from "./components/NavItem";
import { NAV_MENU } from "./data";
import { useTheme } from "@/context/CustomContextProvider";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <MTNavbar shadow={false} fullWidth className="border-0 bg-white/85 backdrop-blur-md dark:bg-black/85">
        <div className="container mx-auto flex items-center justify-between">
          <Typography color={theme.theme === "light" ? "black" : "white"} className="text-3xl font-bold">
            MYQ
          </Typography>
          <ul className="ml-10 hidden items-center gap-8 lg:flex">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeSwitch></ThemeSwitch>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4 dark:border-gray-800">
            <ul className="flex flex-col gap-4">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            <div className="mb-4 mt-6 flex items-center gap-2">
              <ThemeSwitch></ThemeSwitch>
            </div>
          </div>
        </Collapse>
      </MTNavbar>
    </header>
  );
}

export default Navbar;
