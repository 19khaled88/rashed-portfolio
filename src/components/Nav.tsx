"use client";
import Link from "next/link";
import { useState } from "react";
import { HomeIcon, InformationCircleIcon, FolderIcon, WrenchScrewdriverIcon, PlayCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Navigation items array
    const navItems = [
        { name: "Home", href: "#home", icon: HomeIcon },
        { name: "About", href: "#about", icon: InformationCircleIcon },
        { name: "Service", href: "#services", icon: WrenchScrewdriverIcon },
        { name: "Projects", href: "#projects", icon: FolderIcon },
        { name: "Demo", href: "#demo", icon: PlayCircleIcon },
        { name: "Book a Free Audit", href: "", icon: EnvelopeIcon },
    ];

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        // If it's a hash link ( link #contact), scroll to that section 
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <nav className="nav-bar-top block h-16 w-full max-w-screen mx-auto bg-white bg-opacity-90 sticky top-0 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
            <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                <Link
                    href="/"
                    className="mr-4 block cursor-pointer py-1.5 text-red-600 font-bold text-2xl"
                >
                    Rashedul Alam
                </Link>

                <div className="lg:hidden">
                    <button
                        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={toggleMobileMenu}
                        type="button"
                    >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden z-50`}
                >
                    <div className="flex flex-row items-center border-b pb-4">
                        <Link
                            href="/"
                            className="cursor-pointer text-red-600 font-bold text-xl pt-4 ps-4"
                        >
                            Rashedul Alam
                        </Link>
                        <button
                            onClick={toggleMobileMenu}
                            className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col h-full gap-4 p-4">
                        {navItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                                    >
                                        <Link
                                            onClick={() => { handleNavClick(item.href) }}
                                            href={item.name !== 'Book a Free Audit' ?  item.href : 'https://calendly.com/'}
                                            className={`flex items-center ${item.name === "Book a Free Audit" ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-[0_6px_18px_rgba(37,99,235,0.18)] px-4 py-2 rounded-md text-sm" : ""}` }
                                            id={item.name}
                                        >
                                            {
                                                item.name !== "Book a Free Audit" && (
                                                    <Icon className="w-5 h-5 mr-1" />
                                                )
                                            }
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            }
                        )}
                        {/* <li className="mt-4">
                <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500">
                  Login
                </button>
              </li> */}
                    </ul>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <li
                                    key={index}
                                    className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                                >
                                    <Link
                                        href={item.name !== 'Book a Free Audit' ?  item.href : 'https://calendly.com/'}
                                        className={ `flex items-center ${item.name === "Book a Free Audit" ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-[0_6px_18px_rgba(37,99,235,0.18)] px-4 py-2 rounded-md text-sm" : ""}` }
                                        onClick={() => handleNavClick(item.href)}
                                        id={item.name}
                                       
                                    >
                                        {
                                            item.name !== "Book a Free Audit" && (
                                                <Icon className="w-5 h-5 mr-1" />
                                            )
                                        }
                                        
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }
                        )}
                        {/* <li>
                <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-2 rounded-md">
                  Login
                </button>
              </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}