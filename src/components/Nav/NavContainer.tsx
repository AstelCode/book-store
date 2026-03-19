import { ReactNode } from "react";

export const NavContainer = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <div className="py-2">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`bg-nav ${
          isOpen ? "w-50" : "w-18"
        } transition-[width] duration-300 ease-in-out z-50 left-2.5 pt-2.5 rounded-lg  pl-3 overflow-hidden absolute h-[calc(100%-15px)]`}
      >
        <div
          className={`${
            isOpen ? "w-full" : "w-12"
          } transition-[width] duration-300 grid grid-rows-[3.5rem_auto_3.5rem]   gap-2 `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
