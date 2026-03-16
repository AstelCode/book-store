"use client";
import { Input } from "@/components/ui/Input";
import { Submit } from "@/components/ui/Submit";
import { TextArea } from "@/components/ui/TextArea";
import { useState } from "react";

export const EditModal = ({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  if (!isOpen) return null;

  return (
    <div
      className="absolute w-full h-full left-0 top-0"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="w-full h-full bg-[#a1a1a154] flex" onClick={onClose} />
      <div
        className=" p-7 absolute top-[50%] left-[50%] -translate-[50%] w-160 bg-white border border-border-dark rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="gap-5 grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <Input id="name" className="max-h-23" />
            <label htmlFor="description">Description</label>
            <TextArea id="description" />
          </div>
          <div className="col-start-2 flex justify-center items-center">
            <label className="flex justify-center items-center rounded-full w-40 h-40 border overflow-hidden">
              <img
                src={preview || "https://placehold.co/200x200"}
                className="border rounded min-w-44 min-h-44"
              />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImage}
              />
            </label>
          </div>
          <Submit
            name="Edit"
            className="rounded-2xl h-10 col-start-1 col-span-2"
          />
        </form>
      </div>
    </div>
  );
};
