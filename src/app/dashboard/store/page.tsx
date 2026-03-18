"use server";
import { IsUserLogged } from "@/actions/authActions";
import { redirect } from "next/navigation";
import { getBooks } from "@/lib/BooksData";
import { StoreClient } from "@/components/store/StoreClient";

export default async function Store() {
  const logged = IsUserLogged();
  if (!logged) redirect("/auth");

  const books = await getBooks();

  return <StoreClient books={books} />;
}
