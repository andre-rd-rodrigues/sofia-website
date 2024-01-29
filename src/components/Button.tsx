import { libre } from "@/fonts";
import { useTranslations } from "next-intl";
import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  label: string;
  variant?: boolean;
}

function Button({ className, onClick, label, variant }: ButtonProps) {
  const t = useTranslations("components.buttons");

  return (
    <button
      className={`${
        variant ? "bg-cyan" : "bg-orange"
      } py-4 px-8 tracking-widest transition uppercase text-xs font-medium duration-200 text-white hover:opacity-85 ${className} ${
        libre.className
      }`}
      onClick={onClick}
    >
      {t(label)}
    </button>
  );
}

export default Button;
