import { Search } from "@/components/ui/Search";
import { BooksFilter } from "@/components/books/BooksFilter";
import { BooksContainer } from "@/components/books/BooksContainer";
import { IsUserLogged } from "@/actions/authActions";
import { redirect } from "next/navigation";
import { getBooks } from "@/lib/BooksData";

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

export default async function Store() {
  const logged = IsUserLogged();
  if (!logged) {
    redirect("/auth");
  }

  const data = await getBooks();
  return (
    <div className="h-full min-h-0 pt-6 grid grid-rows-[2.5rem_2rem_1fr] gap-5">
      <div className="pr-6">
        <Search />
      </div>
      <BooksFilter />
      <BooksContainer books={data} hideFavorite />
    </div>
  );
}
