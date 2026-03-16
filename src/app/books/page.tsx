import { BooksContainer } from "@/components/books/bookContainer/BooksContainer";
import { BookSearch } from "@/components/books/BookSearch";
import { BooksFilter } from "@/components/books/BooksFilter";

export default function Books() {
  return (
    <div className="grid grid-rows-[5.5rem_2.5rem_4rem_1fr] h-full">
      <div className="h-22 text-2xl flex items-center font-bold">
        <h1>Books</h1>
      </div>
      <BookSearch />
      <BooksFilter />
      <BooksContainer hideFavorite hideAddCart hidePrice />
    </div>
  );
}
