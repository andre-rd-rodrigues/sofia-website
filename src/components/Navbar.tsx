"use client";
import useTranslation from "@/hooks/useTranslation";

import { useState } from "react";

import { proximaNova } from "@/fonts";
import { Link } from "@/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { getTranslationsArray } = useTranslation();

  const navlinks = getTranslationsArray("components.navbar.links");
  const pathname = usePathname();

  const burgerButton = (
    <button
      className="text-blue cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      type="button"
      onClick={() => setNavbarOpen((prevState) => !prevState)}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  );
  return (
    <nav className="fixed top-0 z-50 w-full sm:left-4 sm:right-4 sm:top-4 sm:w-auto">
      <div className="relative h-full bg-white bg-opacity-40 shadow-lg backdrop-blur-[20px] sm:rounded-full">
        <div className="w-full flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <Image
                width={40}
                height={40}
                src="/img/logo.png"
                alt="Sofia Diogo - Logo"
              />
            </Link>
            {burgerButton}
          </div>
          <div
            className={
              "lg:flex w-full lg:w-auto justify-end transition-all duration-300" +
              (navbarOpen ? "flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {navlinks.map(({ href, name }) => (
                <Link
                  className={`px-5 py-3 flex items-center justify-end lg:justify-center text-md text-left text-blue hover:opacity-75`}
                  href={href}
                  key={name}
                  onClick={() => setNavbarOpen((prevState) => !prevState)}
                >
                  <li
                    className={`${
                      pathname === href ? "border-b-2 border-blue" : ""
                    } ${proximaNova.className} font-normal text-sm`}
                  >
                    {name}
                  </li>
                </Link>
              ))}
              <LanguageSelector />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
