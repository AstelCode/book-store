"use client";
import { FiEdit } from "react-icons/fi";

export const UserInfo = ({
  onEdit,
  onLogOut,
}: {
  onEdit?: () => void;
  onLogOut?: () => void;
}) => {
  return (
    <div className="grid grid-cols-[10rem_1fr_auto] bg-card border border-border-dark rounded-card relative">
      <div className="p-5">
        <img className="w-full h-full rounded-full border" />
      </div>
      <div className="py-6 grid grid-rows-[auto_1fr] gap-2 pr-3">
        <span>Name</span>
        <span>Programador senior</span>
      </div>
      <button
        onClick={onLogOut}
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
  );
};
