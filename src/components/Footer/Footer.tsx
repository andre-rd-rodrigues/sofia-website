"use client";
import React from "react";
import FooterSection from "./FooterSection";
import { useTranslations } from "next-intl";
import useTranslation from "@/hooks/useTranslation";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "../Container";
import { SOCIAL_MEDIA } from "@/constants/marketing.constants";

interface SocialMediaLink {
  icon: string;
  href: string;
}

interface FooterLink {
  name: string;
  href: string;
  subLinks: {
    name: string;
    href: string;
    icon: string;
  }[];
}

const Footer: React.FC = () => {
  const t = useTranslations("components");
  const { getTranslationsArray } = useTranslation();
  const footerLinks: FooterLink[] = getTranslationsArray(
    "components.footer.links"
  );

  return (
    <footer className="bg-background-alt">
      <Container className="pt-10">
        {/* Logo */}
        {/*   <Logo fill="white" width={50} height={50} className="mx-auto" /> */}

        {/* Description & Social Media */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 sm:max-w-72">
            <p className="text-white text-sm">{t("footer.description")}</p>
            <div className="flex gap-4 mt-3 justify-center sm:justify-start">
              {SOCIAL_MEDIA.map((social: SocialMediaLink) => (
                <Link href={social.href} key={social.href} passHref>
                  <Icon color="white" icon={social.icon} fontSize={20} />
                </Link>
              ))}
            </div>
          </div>

          <hr className="mb-9 border-gray-200 mx-auto opacity-50" />

          {/* Footer Links */}
          <div className="flex flex-wrap gap-5 sm:gap-24 justify-between sm:justify-normal">
            {footerLinks.map((link: FooterLink, i: number) => (
              <FooterSection
                key={i}
                title={link.name}
                subLinks={link.subLinks}
                sectionHref={link.href}
              />
            ))}
          </div>
        </div>

        <hr className="mt-10 mb-4 border-gray-300 mx-auto opacity-50" />

        {/* Copyright */}
        <div className="text-center pb-5 text-white text-sm">
          <span className="font-proxima-nova font-light">
            © 2025{" "}
            <a
              href="https://andrerodrigo.com"
              className="hover:underline text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              André Rodrigo
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
