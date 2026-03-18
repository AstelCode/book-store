import { ImageInput } from "../ui/ImageInput";
import { Input } from "../ui/Input";
import { Submit } from "../ui/Submit";
import { TextArea } from "../ui/TextArea";

export const AddBookForm = () => {
  return (
    <form className="grid grid-cols-2 h-full p-6 gap-5 grid-rows-[1fr_50px]">
      <ImageInput />
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <Input id="price" type="number" />
        <label htmlFor="price">Price</label>
        <Input id="price" type="number" />
        <label htmlFor="description">Description</label>
        <TextArea id="description" className="max-h-50" />
      </div>
      <div className="col-start-1 col-span-3 row-start-2">
        <Submit name="Add book" />
      </div>
    </form>
  );
};
