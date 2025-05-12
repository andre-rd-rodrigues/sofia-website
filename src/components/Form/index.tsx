'use client';
import { FunctionComponent, InputHTMLAttributes } from 'react';
import { Icon } from '@iconify/react';

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
    <label className="flex w-full items-center border-b border-gray-300 py-2">
      <Icon icon={icon} fontSize={26} />

      <input
        {...inputProps}
        className="w-full border-none px-2 py-1 font-proxima-nova font-light leading-tight focus:outline-none"
        type="text"
        placeholder={placeholder}
        name={label}
        id={label}
      />
    </label>
  );
};

export { Input };
