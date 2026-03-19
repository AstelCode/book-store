"use client";
import { buyBookAction } from "@/actions/cartActions";
import { CardButton } from "@/components/ui/CardButton";
import { useUser } from "@/context/UserContext";
import { Book } from "@/lib/BooksData";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";

export const BookBuyButton = ({
  isList,
  book,
}: {
  isList?: boolean;
  book: Book;
}) => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLoading) return;

    setIsLoading(true);

    startTransition(async () => {
      try {
        await buyBookAction(book.id);
      } finally {
        setIsLoading(false);
      }
    });
  };
  return (
    <CardButton
      onClick={handleBuy}
      className={`${
        isList
          ? "flex-col px-4  gap-3 flex py-4 w-full h-50"
          : "flex justify-center h-50 gap-2 items-center pr-3 pl-2 py-6"
      } h-full w-full `}
    >
      {isLoading || isPending ? (
        <Loader2 className="animate-spin" size={22} />
      ) : (
        <>
          <span className="border border-border-dark px-6 py-1.5 rounded-card font-bold">
            Buy
          </span>
          <span className="text-base font-extrabold">${book.price}</span>
        </>
      )}
    </CardButton>
  );
};
