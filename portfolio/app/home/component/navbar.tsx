'use client'

import { useEffect, useState } from "react";
import { Navbar, Dropdown, Avatar, DarkThemeToggle } from "flowbite-react";

export default function Navbars(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // Cek jika posisi scroll lebih dari 50 piksel
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener ketika komponen unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar fluid className={`fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 transition-colors duration-300 ${
            isScrolled ? 'text-white bg-gray-800' : 'bg-transparent dark:bg-transparent'
          }`}>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle></DarkThemeToggle>
                &nbsp;&nbsp;
                <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className={`${isScrolled ? "text-white" : "text-black dark:text-white"}`} href="#">Home</Navbar.Link>
                <Navbar.Link className={`${isScrolled ? "text-white" : "text-black dark:text-white"}`} href="#">About</Navbar.Link>
                <Navbar.Link className={`${isScrolled ? "text-white" : "text-black dark:text-white"}`} href="#">Services</Navbar.Link>
                <Navbar.Link className={`${isScrolled ? "text-white" : "text-black dark:text-white"}`} href="#">Pricing</Navbar.Link>
                <Navbar.Link className={`${isScrolled ? "text-white" : "text-black dark:text-white"}`} href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}