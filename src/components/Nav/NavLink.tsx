"use client";
import Link from "next/link";
import { ReactNode } from "react";

export const NavLink = ({
  icon,
  active = false,
  href,
  name,
  isOpen,
  disable,
  badge,
  badgeValue,
}: {
  icon: (props: { size: number; className: string }) => ReactNode;
  active?: boolean;
  href: string;
  name?: string;
  isOpen?: boolean;
  disable?: boolean;
  badge?: boolean;
  badgeValue?: number;
}) => {
  return (
    <Link
      href={href}
      className={`relative flex gap-6 items-center min-w-0 max-w-45 group h-12 select-none px-2   rounded-card transition-[width] duration-300 ${
        disable
          ? active
            ? "bg-btn-primary-disable hover:bg-btn-primary-hover-disable"
            : "bg-btn-secondary-disable hover:bg-btn-secondary-hover-disable"
          : active
            ? "bg-btn-secondary hover:bg-btn-secondary-hover"
            : "hover:bg-btn-primary-hover"
      }`}
    >
      {icon({
        size: 30,
        className: `min-w-[31px] min-h-[31px]
        ${
          disable
            ? "stroke-btn-secondary fill-btn-secondary "
            : active
              ? "stroke-btn-primary fill-btn-primary "
              : "stroke-btn-secondary fill-btn-secondary group-hover:stroke-btn-primary group-hover:fill-btn-primary"
        }`,
      })}
      <span
        className={`max-h-5 min-w-20 max-w-20 ${disable ? "text-btn-secondary" : active ? "text-btn-primary" : "text-btn-secondary"}
          ${isOpen ? "opacity-100 ml-0" : "opacity-0 -ml-2"}`}
      >
        {name}
      </span>
      {badge && (
        <div className="flex justify-center items-center text-xs text-white absolute size-6  rounded-full  -top-3 -right-2 bg-red-400 border-border-dark border">
          {badgeValue}
        </div>
      )}
    </Link>
  );
};
