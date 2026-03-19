import { IsAdminUser } from "@/actions/authActions";
import { getUserCartAction } from "@/actions/userAction";
import { PayContainer } from "@/components/cart/PayContainer";
import { BooksContainer } from "@/components/shared/BookExplorer/BooksContainer";
import { redirect } from "next/navigation";

export default async function Cart() {
  const isAdmin = await IsAdminUser();

  if (isAdmin) {
    redirect("/dashboard/user");
  }

  const books = await getUserCartAction();

  const totalPrice =
    Math.round(100 * books.reduce((prev, item) => prev + item.price, 0)) / 100;

  return (
    <div className="h-full grid grid-rows-[1fr_13rem] lg:grid-rows-1 lg:grid-cols-[1fr_25rem]  gap-6 py-6">
      <BooksContainer
        hideControls
        list
        hideFavorite
        hideAddCart
        hideBuy
        showPrice
        showTrashCart
        books={books}
      />
      <PayContainer totalPrice={totalPrice} />
    </div>
  );
}
