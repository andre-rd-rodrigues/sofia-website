'use client';
import { Icon } from '@iconify/react';
import React from 'react';

type Props = {
  title: string;
  description: string;
  icon: string;
};

const IconCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex h-96 w-80 flex-col items-center justify-center rounded-lg px-11 text-center shadow-lg">
      <Icon icon={icon} fontSize={60} />
      <h5 className="my-4 font-proxima-nova  text-xl font-medium">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default IconCard;
