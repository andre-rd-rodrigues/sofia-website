'use client';
import useTranslation from '@/hooks/useTranslation';

import { useState } from 'react';

import { proximaNova } from '@/fonts';
import { Link } from '@/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { getTranslationsArray } = useTranslation();

  const navlinks = getTranslationsArray('components.navbar.links');
  const pathname = usePathname();

  const burgerButton = (
    <button
      className="text-blue block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
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
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
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
              'w-full justify-end transition-all duration-300 lg:flex lg:w-auto' +
              (navbarOpen ? 'flex' : ' hidden')
            }
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
              {navlinks.map(({ href, name }) => (
                <Link
                  className={`text-md text-blue flex items-center justify-end px-5 py-3 text-left hover:opacity-75 lg:justify-center`}
                  href={href}
                  key={name}
                  onClick={() => setNavbarOpen((prevState) => !prevState)}
                >
                  <li
                    className={`${
                      pathname === href ? 'border-blue border-b-2' : ''
                    } ${proximaNova.className} text-sm font-normal`}
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
