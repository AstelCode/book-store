"use client";
import type { Book } from "@/lib/BooksData";
import { Submit } from "../ui/Submit";
import { buyBookAction } from "@/actions/cartActions";

export const BookInfo = ({ book }: { book: Book }) => {
  const action = async () => {
    await buyBookAction(book.id);
  };
  return (
    <div className=" fixed w-88 right-10 top-5 bg-card rounded-md border border-border-dark p-6 gap-3 flex flex-col h-[calc(100%-40px)]">
      <h1 className="text-2xl">{book?.name}</h1>
      <p className="text-start text-base h-80">{book?.description}</p>
      <div className="w-full border bg-white rounded-md flex flex-col p-3 gap-5 pt-4 shadow-sm">
        <div className="text-xl pl-2 flex gap-2">
          <span className="font-extrabold">Price:</span>
          <span> ${book?.price}</span>
        </div>
        <form action={action}>
          <Submit name="add to cart" pedingMessage="adding..." />
        </form>
      </div>
    </div>
  );
};
