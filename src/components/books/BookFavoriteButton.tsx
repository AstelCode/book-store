"use client";
import { useState, useTransition } from "react";
import { Book } from "@/lib/BooksData";
import { CardButton } from "../ui/CardButton";
import { FavoriteButton } from "../ui/FavoriteButton";
import { Loader2 } from "lucide-react";
import { markFavoriteBookAction } from "@/actions/bookAction";
import { useUser } from "@/context/UserContext";

export const BookFavoriteButton = ({
  isList,
  book,
}: {
  isList?: boolean;
  book: Book;
}) => {
  const { user } = useUser();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const [favorite, setFavorite] = useState(user?.favorites.includes(book.id));

  const handleFavorite = () => {
    if (isLoading) return;

    setFavorite((prev) => !prev);
    setIsLoading(true);

    startTransition(async () => {
      try {
        await markFavoriteBookAction(book.id);
      } catch {
        setFavorite((prev) => !prev);
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
        isList ? "w-30" : "ml-11 w-9 h-9"
      }`}
    >
      {isLoading || isPending ? (
        <Loader2 className="animate-spin" size={22} />
      ) : (
        <FavoriteButton size={25} active={favorite} />
      )}
    </CardButton>
  );
};
