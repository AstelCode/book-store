import { IsAdminUser, IsUserLogged } from "@/actions/authActions";
import { redirect } from "next/navigation";
import { getBooksAction } from "@/actions/bookAction";
import { BookExplorer } from "@/components/shared/BookExplorer/BookExplorer";
import { getUserStore as getUserStoreAction } from "@/actions/userAction";

export default async function Store() {
  const logged = await IsUserLogged();
  const isAdmin = await IsAdminUser();

  if (!logged) redirect("/auth");

  const books = await getUserStoreAction();

  return (
    <BookExplorer
      books={books}
      hideFavorite={isAdmin}
      hideAddCart={isAdmin}
      hideBuy={isAdmin}
      showPrice={isAdmin}
    />
  );
}
