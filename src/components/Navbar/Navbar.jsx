import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowmenu] = useState(true);

    return (
        <>
            <style>
                {`
                @keyframes fade-in {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }

                .animate-fade-in {
                  animation: fade-in 1s ease-out;
                }
                `}
            </style>
            <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-black">
                <span className="text-4xl font-extrabold tracking-wide animate-fade-in">Portfolio</span>
                <ul className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl opacity-90 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                    <li>
                        <Link
                            to="About"
                            smooth={true}
                            duration={500}
                            className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-300"
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Projects"
                            smooth={true}
                            duration={500}
                            className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Footer"
                            smooth={true}
                            duration={500}
                            className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                {showMenu ? (
                    <RiMenu2Line
                        size={30}
                        className="md:hidden absolute right-10 top-6 transition-all duration-300"
                        onClick={() => {
                            openMenu(!menu);
                            setShowmenu(!showMenu);
                        }}
                    />
                ) : (
                    <RiCloseLine
                        size={30}
                        className="md:hidden absolute right-10 top-6 transition-all duration-300"
                        onClick={() => {
                            openMenu(!menu);
                            setShowmenu(!showMenu);
                        }}
                    />
                )}
            </nav>
        </>
    );
};

export default Navbar;




