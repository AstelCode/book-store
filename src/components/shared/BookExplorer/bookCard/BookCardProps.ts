import { Book } from "@/lib/BooksData";

export interface BookItemProps {
  hideImage?: boolean;
  hideAddCart?: boolean;
  hideFavorite?: boolean;
  hideBuy?: boolean;
  showPrice?: boolean;
  showTrashCart?: boolean;
  showEdit?: boolean;

  isList?: boolean;
  book: Book;
}
