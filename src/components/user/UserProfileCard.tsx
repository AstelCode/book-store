"use client";
import { FiEdit } from "react-icons/fi";
import { EditUserModal } from "./EditUserModal";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import { LogOutAction } from "@/actions/authActions";
export const UserProfileCard = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onEdit = () => {
    setIsOpen(true);
  };

  const handleLogOut = async () => {
    await LogOutAction();
  };

  return (
    <>
      <div className="grid grid-cols-[10rem_1fr_auto] bg-card border border-border-dark rounded-card relative">
        <div className="p-5 relative flex items-center justify-center">
          {user?.logoSrc ? (
            <Image
              className="w-28 h-28 rounded-full border"
              width={300}
              height={300}
              alt="logo"
              src={user?.logoSrc || ""}
            />
          ) : (
            <div className="w-full h-full rounded-full border" />
          )}
        </div>
        <div className="py-6 grid grid-rows-[auto_1fr] gap-2 pr-3">
          <span className="font-bold  text-lg">{user?.name}</span>
          <span>{user?.description}</span>
        </div>
        <button
          onClick={handleLogOut}
          className="mt-2 mr-2  px-4 cursor-pointer hover:bg-btn-secondary-hover py-4  h-5 flex justify-center items-center rounded-sm bg-white border-border-dark border text-red-500 text-sm"
        >
          Log out
        </button>
        <div
          onClick={onEdit}
          className="absolute flex justify-center items-center top-0.75 left-0.75 p-1 rounded-md bg-white border border-border-dark hover:bg-btn-secondary-hover"
        >
          <FiEdit />
        </div>
      </div>
      <EditUserModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
