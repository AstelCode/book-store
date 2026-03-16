"use client";
import { ReactNode } from "react";

export const CardButton = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`${className} text-sm font-inter bg-btn-secondary border-border-hover border  flex items-center justify-center rounded-card hover:bg-btn-secondary-hover`}
    >
      {children}
    </button>
  );
};
