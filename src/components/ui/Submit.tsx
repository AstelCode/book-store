"use client";

import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";
import { useFormStatus } from "react-dom";
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export const Submit = ({
  name,
  className,
  pedingMessage = "Saving...",
  ...props
}: ButtonProps & { name: string; pedingMessage?: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className={clsx(
        "w-full bg-btn-primary text-btn-secondary  py-2 hover:bg-btn-primary-hover rounded-md",
        className,
      )}
    >
      {pending ? pedingMessage : name}
    </button>
  );
};
