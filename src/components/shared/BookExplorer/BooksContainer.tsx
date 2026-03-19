"use client";
import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import { BookCard } from "./bookCard/BookCard";
import { Book } from "@/lib/BooksData";

interface BookContainerProps {
  hideImage?: boolean;
  hideAddCart?: boolean;
  hideFavorite?: boolean;
  hideBuy?: boolean;
  showPrice?: boolean;
  showTrashCart?: boolean;
  showEdit?: boolean;

  list?: boolean;
  hideControls?: boolean;
  books?: Book[];
}

export const BooksContainer = (props: BookContainerProps) => {
  const [isList, setIsList] = useState(props.list ?? false);
  return (
    <div
      className={`h-full min-h-0 ${
        props.hideControls ? " grid grid-rows-1" : "grid grid-rows-[40px_1fr]"
      }`}
    >
      {!props.hideControls && (
        <div className="flex gap-4">
          <FaList
            size={23}
            onClick={() => setIsList(true)}
            className={
              isList
                ? "fill-btn-primary stroke-btn-primary"
                : "fill-[#a3a3a3] stroke-[#a3a3a3]"
            }
          />
          <CiGrid41
            size={26}
            strokeWidth={1.1}
            onClick={() => setIsList(false)}
            className={
              !isList
                ? "fill-btn-primary stroke-btn-primary"
                : "fill-[#a3a3a3] stroke-[#a3a3a3]"
            }
          />
        </div>
      )}
      <div className="overflow-y-auto pr-4 pb-4 scroll">
        <div
          className={
            isList
              ? "flex flex-col gap-5 "
              : "grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-4"
          }
        >
          {(props.books ?? []).map((item) => (
            <BookCard key={item.id} book={item} {...props} isList={isList} />
          ))}
        </div>
      </div>
    </div>
  );
};
