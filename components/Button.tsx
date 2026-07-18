import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 ${className ?? ""}`}
      {...props}
    />
  );
}
