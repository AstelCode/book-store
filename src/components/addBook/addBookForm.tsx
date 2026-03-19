"use client";
import { addBookAction } from "@/actions/bookAction";
import { ImageInput } from "../ui/ImageInput";
import { Input } from "../ui/Input";
import { Submit } from "../ui/Submit";
import { TextArea } from "../ui/TextArea";

export const AddBookForm = () => {
  return (
    <form
      action={addBookAction}
      className="grid grid-cols-2 h-full p-6 gap-5 grid-rows-[1fr_50px]"
    >
      <ImageInput name="cover" />
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <Input id="name" type="text" name="name" />
        <label htmlFor="price">Price</label>
        <Input id="price" type="number" name="price" />
        <label htmlFor="language">Language</label>
        <Input id="language" type="text" name="language" />
        <label htmlFor="description">Description</label>
        <TextArea id="description" className="max-h-50" name="description" />
      </div>
      <div className="col-start-1 col-span-3 row-start-2">
        <Submit name="Add book" />
      </div>
    </form>
  );
};
