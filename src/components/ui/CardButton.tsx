"use client";
import { ReactNode } from "react";

export const CardButton = ({
  children,
  className,
  disabled,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} cursor-pointer text-sm font-inter bg-btn-secondary border-border-hover border  rounded-card hover:bg-btn-secondary-hover`}
    >
      {children}
    </button>
  );
};
