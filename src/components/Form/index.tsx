"use client";
import { FunctionComponent, InputHTMLAttributes } from "react";
import { Icon } from "@iconify/react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  label: string;
  placeholder: string;
}

const Input: FunctionComponent<FormInputProps> = ({
  icon,
  label,
  placeholder,
  ...inputProps
}) => {
  return (
    <label className="flex items-center border-b border-gray-300 py-2 w-full">
      <Icon icon={icon} fontSize={26} />

      <input
        {...inputProps}
        className="border-none w-full py-1 px-2 leading-tight focus:outline-none font-proxima-nova font-light"
        type="text"
        placeholder={placeholder}
        name={label}
        id={label}
      />
    </label>
  );
};

export { Input };
