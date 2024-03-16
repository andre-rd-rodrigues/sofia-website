import { Icon } from "@iconify/react";
import Link from "next/link";

interface SubLink {
  name: string;
  href: string;
  icon: string;
}

interface FooterSectionProps {
  title: string;
  sectionHref: string;
  subLinks?: SubLink[];
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  sectionHref,
  subLinks
}) => {
  const isContact = title.toLowerCase().includes("contact");

  return (
    <div>
      <h2 className={`text-m font-medium mb-2 tracking-wider text-white`}>
        {title}
      </h2>
      <ul className="text-white opacity-95 font-thin">
        {subLinks?.map(({ name, href, icon }, i) =>
          isContact ? (
            <li key={i}>
              <Link
                href={href}
                className="hover:underline flex gap-1 items-center mb-2 mt-1"
              >
                <Icon icon={icon} fontSize={15} />
                <p className="text-xs">{name}</p>
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link href={href} className="hover:underline text-xs">
                {name}
              </Link>
            </li>
          )
        )}

        {/* When no sub links are provided */}
        {!subLinks && (
          <li>
            <Link href={sectionHref} className="hover:underline text-xs">
              {title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterSection;
