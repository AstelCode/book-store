"use client";
import { BooksFilter } from "./BooksFilter";
import { BooksContainer } from "./BooksContainer";
import { Book } from "@/lib/BooksData";
import { useMemo, useState } from "react";
import { Search } from "@/components/ui/Search";

interface BookExplorerProps {
  books: Book[];
  hideImage?: boolean;
  hideAddCart?: boolean;
  hideFavorite?: boolean;
  hideBuy?: boolean;
  showPrice?: boolean;
  showTrashCart?: boolean;
  showEdit?: boolean;
}

export const BookExplorer = ({ books, ...props }: BookExplorerProps) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book
        .name!.toLowerCase()
        .includes(query.toLowerCase());

      const matchesFilter =
        filters.length === 0 ||
        book.languages?.some((lang) => filters.includes(lang));

      return matchesSearch && matchesFilter;
    });
  }, [books, query, filters]);

  return (
    <div className="h-full min-h-0 pt-6 grid grid-rows-[2.5rem_2rem_1fr] gap-5">
      <div className="pr-6">
        <Search onSearch={setQuery} />
      </div>

      <BooksFilter onChange={setFilters} />

      <BooksContainer books={filteredBooks} {...props} />
    </div>
  );
};
