"use client";
import { Input } from "@/components/ui/Input";
import { Submit } from "@/components/ui/Submit";
import { TextArea } from "@/components/ui/TextArea";
import { ImageInput } from "../ui/ImageInput";
import { useUser } from "@/context/UserContext";
import { editUserAction } from "@/actions/userAction";
import { useTransition } from "react";

export const EditUserModal = ({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) => {
  const { user } = useUser();
  const [, startTransition] = useTransition();

  if (!isOpen) return null;

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await editUserAction(formData);
      onClose?.();
    });
  };

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
        <form className="gap-5 grid grid-cols-2" action={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name-edit-user">Name</label>
            <Input
              id="name-edit-user"
              className="max-h-23"
              name="name"
              defaultValue={user?.name}
            />
            <label htmlFor="description">Description</label>
            <TextArea
              id="description"
              name="description"
              className="min-h-40 max-h-40"
              defaultValue={user?.description}
            />
          </div>
          <ImageInput size={200} logo src={user?.logoSrc} name="logo" />
          <Submit
            pedingMessage="Saving..."
            name="Edit"
            className="rounded-2xl h-10 col-start-1 col-span-2"
          />
        </form>
      </div>
    </div>
  );
};
