import { ReactNode } from "react";

export const NavContainer = ({
  children,
  isOpen,
  className,
}: {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}) => {
  return (
    <div className="py-2">
      <div
        className={`bg-nav ${
          isOpen ? "w-50" : "w-16"
        } transition-[width] duration-300 ease-in-out h-full pt-2.5 rounded-lg  px-2 overflow-hidden`}
      >
        <div
          className={`${
            isOpen ? "w-full" : "w-12"
          } transition-[width] duration-300 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
