"use client";
import React, { ButtonHTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import { libre } from "@/fonts";
import { useTranslations } from "next-intl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  label: string;
  variant?: boolean;
  icon?: string;
}

function Button({
  className,
  onClick,
  label,
  variant,
  icon,
  ...buttonProps
}: ButtonProps) {
  const t = useTranslations("components.buttons");

  return (
    <button
      className={`${
        variant ? "bg-cyan" : "bg-orange"
      } py-4 px-8 gap-3 tracking-widest transition uppercase text-xs font-medium duration-200 text-white hover:opacity-85 ${className} ${
        libre.className
      }`}
      onClick={onClick}
      {...buttonProps}
    >
      <div className="flex items-center gap-3">
        {icon && <Icon icon={icon} fontSize={22} className="text-white" />}
        {t(label)}
      </div>
    </button>
  );
}

export default Button;
