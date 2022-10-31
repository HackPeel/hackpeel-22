import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Logo from "../public/images/logo.png";

import { GoThreeBars } from "react-icons/go"

// TODO: Make sure this fits on all screens
const links = [
    {
        name: "Home",
        link: "/#home",
        id: "home",
        priority: false
    },
    {
        name: "About Us",
        link: "/#about",
        id: "about-us",
        priority: false
    },
    /*
    {
        name: "Timetable",
        link: "/#timetable",
        id: "timetable",
        priority: false
    },
    */
    {
        name: "FAQ",
        link: "/#faq",
        id: "faq",
        priority: false
    },
    {
        name: "Team",
        link: "/#team",
        id: "team",
        priority: false
    },
    {
        name: "Sponsors",
        link: "/#sponsors",
        id: "sponsors",
        priority: false
    },
    {
        name: "Sign Up",
        link: "/sign-up",
        id: "call-to-action",
        priority: true
    },
];

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="bg-slate-900 py-2 lg:py-4 sticky" id="home">
            <div className="container px-4 mx-auto lg:flex lg:items-center">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a className="font-bold text-xl text-teal">
                            <Image src={Logo} alt="logo" width={200} height={50} />
                        </a>
                    </Link>

                    <button
                        className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 lg:hidden"
                        aria-label="Menu"
                        data-test-id="navbar-menu"
                        onClick={
                            () => {
                                setShowDropdown(!showDropdown);
                            }}
                        >
                        <GoThreeBars />
                    </button>
                </div>

                <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0`} data-test-id="navbar">
                    {
                        links.map(({ name, link, priority, id }) =>
                            <Link key={name} href={link} scroll={!(link.includes("#"))}>
                                <a 
                                    className={`${priority ? "text-blue-600 hover:bg-blue-600 hover:text-white text-center border border-solid border-blue-600 mt-1 lg:mt-0 lg:ml-1" : "text-gray-300 hover:bg-gray-200 hover:text-gray-700"} p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors `}
                                    data-test-id={`navbar-${id}`}
                                >
                                    {name}
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}