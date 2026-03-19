import { Book } from "@/lib/BooksData";
import { IoCartOutline } from "react-icons/io5";
import { useState, useTransition } from "react";
import { addBookToCartAction } from "@/actions/cartActions";
import { Loader2 } from "lucide-react";
import { CardButton } from "@/components/ui/CardButton";

export const BookAddToCartButton = ({
  isList,
  book,
}: {
  isList?: boolean;
  book: Book;
}) => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    startTransition(async () => {
      try {
        await addBookToCartAction(book.id);
      } finally {
        setIsLoading(false);
      }
    });
  };

  return (
    <CardButton
      onClick={handleAddToCart}
      disabled={isLoading}
      className={`h-10 [grid-area:cart] grid place-content-center ${isList ? "mt-2" : "ml-2 h-9 w-9"}`}
    >
      {isLoading || isPending ? (
        <Loader2 className="animate-spin" size={22} />
      ) : (
        <IoCartOutline
          size={26}
          className="fill-btn-primary stroke-btn-primary "
        />
      )}
    </CardButton>
  );
};
