import { Book } from "@/lib/BooksData";

export interface BookItemProps {
  hideImage?: boolean;
  hideAddCart?: boolean;
  hideFavorite?: boolean;
  hidePrice?: boolean;
  showTrash?: boolean;

  isList?: boolean;
  book: Book;
}
