"use client";
import { removeBookFromCartAction } from "@/actions/cartActions";
import { CardButton } from "@/components/ui/CardButton";
import { useUser } from "@/context/UserContext";
import { Book } from "@/lib/BooksData";
import { Loader2, Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";

export const BookRemoveFromCartButton = ({
  isList,
  book,
}: {
  isList?: boolean;
  book: Book;
}) => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLoading) return;

    setIsLoading(true);

    startTransition(async () => {
      try {
        await removeBookFromCartAction(book.id);
      } finally {
        setIsLoading(false);
      }
    });
  };

  return (
    <CardButton
      onClick={handleFavorite}
      disabled={isLoading}
      className={`[grid-area:favorite] grid place-content-center transition ${
        isList ? "w-30" : "ml-10 w-9 h-9"
      }`}
    >
      {isLoading || isPending ? (
        <Loader2 className="animate-spin" size={22} />
      ) : (
        <Trash2Icon size={25} />
      )}
    </CardButton>
  );
};
