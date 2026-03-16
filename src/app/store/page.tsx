import { BooksFilter } from "@/components/books/BooksFilter";
import { BookSearch } from "../../components/books/BookSearch";
import { BooksContainer } from "../../components/books/bookContainer/BooksContainer";

export default function Books() {
  return (
    <div className="h-full min-h-0 pt-6 grid grid-rows-[2.5rem_2rem_1fr] gap-5">
      <div className="pr-6">
        <BookSearch />
      </div>
      <BooksFilter />
      <BooksContainer />
    </div>
  );
}
