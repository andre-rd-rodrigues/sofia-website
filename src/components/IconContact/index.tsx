'use client';
import { Icon } from '@iconify/react';
import React from 'react';

type IconContactProps = {
  icon: string;
  contact: string;
  className?: string;
  href?: string;
};

function IconContact({ icon, contact, className, href }: IconContactProps) {
  const renderIcon = <Icon fontSize={20} icon={icon} className="text-cyan" />;

  return href ? (
    <a
      href={href}
      target="_blank"
      className={`${className} inline-flex items-center justify-center gap-2`}
      rel="noreferrer"
    >
      {renderIcon}
      <p className="text-zinc-500 hover:text-zinc-800">{contact}</p>
    </a>
  ) : (
    <div
      className={`${className} inline-flex items-center justify-center gap-2 `}
    >
      {renderIcon}
      <p className="text-zinc-500 hover:text-zinc-800">{contact}</p>
    </div>
  );
}

export default IconContact;
