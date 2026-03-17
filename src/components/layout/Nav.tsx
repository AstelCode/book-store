"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { CiGrid41 } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import Image from "next/image";
import { NavContainer } from "./NavContainer";
import { NavLink } from "./NavLink";
import { NavToggleButton } from "./NavToggleButton";
import { redirect } from "next/navigation";
import { CiLogin } from "react-icons/ci";
import { PiStorefrontThin } from "react-icons/pi";
import { IoLibraryOutline } from "react-icons/io5";

interface NavOption {
  path: string;
  name: string;
  icon: (props: { size: number; className: string }) => ReactNode;
}

const options: NavOption[] = [
  { path: "/store", name: "Store", icon: PiStorefrontThin },
  { path: "/cart", name: "Cart", icon: IoBagOutline },
  { path: "/books", name: "Books", icon: IoLibraryOutline },
];

const optionsAdmin: NavOption[] = [
  { path: "/store", name: "Store", icon: PiStorefrontThin },
  { path: "/books", name: "Books", icon: IoLibraryOutline },
  { path: "/add-book", name: "Add book", icon: MdOutlineAdd },
];

const NavUser = ({
  isOpen,
  onClickImage,
  active,
  isLogged,
}: {
  isOpen?: boolean;
  onClickImage?: () => void;
  active?: boolean;
  isLogged?: boolean;
}) => {
  return (
    <div
      className={`max-w-45 ${isOpen ? "grid-cols-[5rem_auto]" : ""} ${isLogged && (active ? "bg-btn-secondary text-btn-primar hover:bg-btn-primary-hover" : "text-btn-secondary")} ${!isLogged && "bg-btn-secondary text-btn-primary "} cursor-pointer h-12 grid items-center pl-1  overflow-hidden  rounded-md`}
      onClick={onClickImage}
    >
      {isLogged ? (
        <div className="overflow-hidden rounded-full size-10 flex items-center justify-center border-white border bg-[#b4b4b4]">
          <Image
            className="select-none"
            src="https://i.pravatar.cc/400"
            alt=""
            width={40}
            height={40}
          />
        </div>
      ) : (
        <div>
          <CiLogin size={30} />
        </div>
      )}
      {isOpen && isLogged && <span className=" text-lg">Name</span>}
      {isOpen && !isLogged && (
        <span className=" text-lg max-h-10 min-w-20">Log in</span>
      )}
    </div>
  );
};

interface NavProps {
  isAdmin?: boolean;
  isLogged?: boolean;
}

export const Nav = ({ isAdmin, isLogged }: NavProps) => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const onClickImage = () => {
    redirect("/user/0");
  };

  return (
    <NavContainer
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      className="grid grid-rows-[3.5rem_auto_3.5rem]   gap-2 "
    >
      <NavUser
        isOpen={isOpen}
        onClickImage={onClickImage}
        active={path.startsWith("/user")}
        isLogged={isLogged}
      />
      <div className="grid grid-rows-[repeat(auto-fit,3.5rem)]">
        {(isAdmin ? optionsAdmin : options).map((item) => (
          <NavLink
            key={item.path}
            icon={item.icon}
            href={item.path}
            active={path.startsWith(item.path)}
            name={item.name}
            isOpen={isOpen}
            disable={item.name == "Favorites"}
          />
        ))}
      </div>
    </NavContainer>
  );
};
