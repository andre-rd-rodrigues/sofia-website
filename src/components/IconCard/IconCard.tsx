"use client";
import { Icon } from "@iconify/react";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const IconCard = ({ title, description, icon }: Props) => {
  return (
    <div className="w-80 h-96 px-11 flex flex-col items-center justify-center text-center shadow-lg rounded-lg">
      <Icon icon={icon} fontSize={60} />
      <h5 className="font-proxima-nova font-medium  text-xl my-4">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default IconCard;
