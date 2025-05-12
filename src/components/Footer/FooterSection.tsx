import { Icon } from '@iconify/react';
import Link from 'next/link';

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
  subLinks,
}) => {
  const isContact = title.toLowerCase().includes('contact');

  return (
    <div>
      <h4
        className={`mb-2 text-sm font-medium uppercase tracking-widest text-white`}
      >
        {title}
      </h4>
      <ul className="text-white">
        {subLinks?.map(({ name, href, icon }, i) =>
          isContact ? (
            <li key={i}>
              <Link
                href={href}
                className="mb-2 mt-1 flex items-center gap-1 hover:underline"
              >
                <Icon icon={icon} fontSize={15} />
                <p className="text-sm">{name}</p>
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link href={href} className="text-sm font-light hover:underline">
                {name}
              </Link>
            </li>
          ),
        )}

        {/* When no sub links are provided */}
        {!subLinks && (
          <li>
            <Link href={sectionHref} className="text-xs hover:underline">
              {title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterSection;
