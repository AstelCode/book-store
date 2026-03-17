import { ReactNode } from "react";

export const NavContainer = ({
  children,
  isOpen,
  className,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <div className="py-2">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`bg-nav ${
          isOpen ? "w-50" : "w-16"
        } transition-[width] duration-300 ease-in-out left-2.5 pt-2.5 rounded-lg  px-2 overflow-hidden absolute h-[calc(100%-15px)]`}
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
