"use client";
import { User } from "@/lib/UsersData";
import Image from "next/image";
import { CiLogin } from "react-icons/ci";

export const NavUser = ({
  isOpen,
  onClickImage,
  active,
  user,
}: {
  isOpen?: boolean;
  onClickImage?: () => void;
  active?: boolean;
  user: User | null;
}) => {
  const isLogged = user != null;
  return (
    <div
      className={`max-w-45 ${isOpen ? "grid-cols-[5rem_auto]" : ""} ${isLogged && (active ? "bg-btn-secondary text-btn-primar hover:bg-btn-secondary-hover" : "text-btn-secondary hover:bg-btn-primary-hover")} ${!isLogged && "bg-btn-secondary text-btn-primary "} cursor-pointer h-12 grid items-center pl-1  overflow-hidden  rounded-md`}
      onClick={onClickImage}
    >
      {isLogged ? (
        <div className="overflow-hidden rounded-full size-10 flex items-center justify-center border-white border bg-[#b4b4b4]">
          <Image
            className="select-none w-10 h-10"
            src={user.logoSrc || "https://placehold.co/10x10"}
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
      {isOpen && isLogged && <span className=" text-lg ">{user.name}</span>}
      {isOpen && !isLogged && (
        <span className=" text-lg max-h-10 min-w-20">Log in</span>
      )}
    </div>
  );
};
