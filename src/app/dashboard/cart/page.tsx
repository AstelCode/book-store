"use server";

import { IsAdminUser, IsUserLogged } from "@/actions/authActions";
import { BooksContainer } from "@/components/books/BooksContainer";
import { PayContainer } from "@/components/cart/PayContainer";
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

export default async function Cart() {
  const isAdmin = await IsAdminUser();

  if (isAdmin) {
    redirect("/dashboard/user");
  }

  return (
    <div className="h-full grid grid-rows-[1fr_13rem] lg:grid-rows-1 lg:grid-cols-[1fr_25rem]  gap-6 py-6">
      <BooksContainer hideControls list hideFavorite hideAddCart />
      <PayContainer />
    </div>
  );
}
