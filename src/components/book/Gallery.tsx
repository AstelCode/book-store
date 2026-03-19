"use client";

import { Book } from "@/lib/BooksData";
import Image from "next/image";
import { useState } from "react";

export const Gallery = ({ book }: { book: Book }) => {
  const [selectedImage, setSelectedImage] = useState(
    book?.cover || "https://placehold.co/200x400",
  );
  const hasCovers = book.covers && book.covers.length > 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-90 aspect-[2/3]">
        <div
          className={`grid w-full h-full gap-2 ${hasCovers ? "grid-rows-[5fr_10rem]" : "grid-rows-1"}`}
        >
          <div
            className={`flex justify-center items-center bg-[#f3f3f3] relative ${hasCovers ? "rounded-t-md" : "rounded-md"}`}
          >
            <Image
              src={selectedImage}
              fill
              className="object-contain"
              alt="book-preview"
            />
          </div>

          {hasCovers && (
            <div className="bg-card border border-[#a7a7a7] rounded-b-md flex gap-2 overflow-x-auto p-2">
              {book.covers?.map((item, i) => (
                <div
                  key={i}
                  className="w-30 h-full border relative cursor-pointer flex-shrink-0"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image src={item} alt="cover" fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
