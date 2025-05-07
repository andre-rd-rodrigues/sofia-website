"use client";
import React, { ButtonHTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import { libre } from "@/fonts";
import { useTranslations } from "next-intl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  label?: string;
  variant?: boolean;
  icon?: string;
  iconSize?: number;
  children?: React.ReactNode;
}

function Button({
  className,
  onClick,
  label,
  variant,
  icon,
  iconSize = 22,
  children,
  ...buttonProps
}: ButtonProps) {
  const t = useTranslations("components.buttons");

  const baseClasses =
    "border px-4 py-2 text-sm font-normal transition flex items-center justify-center gap-2";

  const darkClasses = "border-black bg-black text-white hover:bg-gray-800";
  const whiteClasses = "border-black bg-white text-black hover:bg-gray-100";

  const buttonClasses = `${baseClasses} ${
    variant ? darkClasses : whiteClasses
  } ${className} ${libre.className}`;

  return (
    <button className={buttonClasses} onClick={onClick} {...buttonProps}>
      <div className="flex items-center justify-center gap-2">
        {icon && (
          <Icon icon={icon} fontSize={iconSize} className="text-black" />
        )}
        {label ? t(label) : children}
      </div>
    </button>
  );
}

export default Button;
