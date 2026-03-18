"use server";
import { IsUserLogged } from "@/actions/authActions";
import { BooksContainer } from "@/components/books/BooksContainer";
import { BooksFilter } from "@/components/books/BooksFilter";
import { Search } from "@/components/ui/Search";
import { redirect } from "next/navigation";

const data: { src?: string; name: string; price: number }[] = [
  { name: "book 1", price: 10 },
  { name: "book 2", price: 10 },
  { name: "book 3", price: 10 },
  { name: "book 4", price: 10 },
  { name: "book 5", price: 10 },
  { name: "book 6", price: 10 },
  { name: "book 7", price: 10 },
  { name: "book 8", price: 10 },
  { name: "book 9", price: 10 },
];

export default async function Library() {
  const logged = await IsUserLogged();
  if (!logged) {
    redirect("/auth");
  }
  return (
    <div className="grid grid-rows-[5.5rem_2.5rem_4rem_1fr] h-full">
      <div className="h-22 text-2xl flex items-center font-bold">
        <h1>Books</h1>
      </div>
      <Search />
      <BooksFilter />
      <BooksContainer hideFavorite hideAddCart hidePrice />
    </div>
  );
}
