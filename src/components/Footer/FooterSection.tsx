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
      <h4
        className={`text-sm font-medium mb-2 uppercase tracking-widest text-white`}
      >
        {title}
      </h4>
      <ul className="text-white">
        {subLinks?.map(({ name, href, icon }, i) =>
          isContact ? (
            <li key={i}>
              <Link
                href={href}
                className="hover:underline flex gap-1 items-center mb-2 mt-1"
              >
                <Icon icon={icon} fontSize={15} />
                <p className="text-sm">{name}</p>
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link href={href} className="hover:underline text-sm font-light">
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
