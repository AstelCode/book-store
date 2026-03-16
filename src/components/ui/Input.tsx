import clsx from "clsx";
import { InputHTMLAttributes } from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        "bg-card border border-border-dark rounded-card h-10 outline-none pl-3",
        className,
      )}
    />
  );
};
