"use client";

import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export const Submit = ({
  name,
  className,
  ...props
}: ButtonProps & { name: string }) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full bg-btn-primary text-btn-secondary  py-2 hover:bg-btn-primary-hover rounded-md",
        className,
      )}
    >
      {name}
    </button>
  );
};
