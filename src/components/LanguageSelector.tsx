import useIsMobile from "@/hooks/useIsMobile";

import { Popover, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";

import { Fragment } from "react";
import { Link, usePathname } from "../navigation";
import { useLocale } from "next-intl";
import { proximaNova } from "@/fonts";

function LanguageSelector() {
  const pathname = usePathname();
  const locale = useLocale();

  const isMobile = useIsMobile();

  const checkMark = (lang: string) => (
    <span className="ml-4">{locale === lang && `✔`}</span>
  );

  return (
    <Popover className="relative mx-5 my-1 flex justify-end">
      {/* Icon Button */}
      <Popover.Button className="h-full flex items-center justify-center focus:outline-none">
        <Icon icon="ph:globe-thin" fontSize={33} className="text-blue" />
      </Popover.Button>

      {/* Dropdown */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className={`absolute ${
            isMobile ? "left-0" : "right-0"
          } z-10 mt-2 overflow-hidden bg-white shadow-lg text-dark`}
        >
          <Popover.Button
            as={Link}
            href={pathname}
            locale="en"
            className={`group relative flex items-center px-9 py-4 text-m  hover:bg-gray-50 ${proximaNova.className}`}
          >
            English {checkMark("en")}
          </Popover.Button>
          <Popover.Button
            as={Link}
            href={pathname}
            locale="pt"
            className={`group relative flex items-center px-9 py-4 text-m  hover:bg-gray-50 ${proximaNova.className}`}
          >
            Português {checkMark("pt")}
          </Popover.Button>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default LanguageSelector;
