import { IsUserLogged } from "@/actions/authActions";
import { getUserLibrary } from "@/actions/userAction";
import { BookExplorer } from "@/components/shared/BookExplorer/BookExplorer";
import { redirect } from "next/navigation";

export default async function Library() {
  const logged = await IsUserLogged();
  if (!logged) {
    redirect("/auth");
  }

  const books = await getUserLibrary();

  return (
    <div className="grid grid-rows-[3.5rem_1fr] h-full">
      <div className="h-22 text-2xl flex items-center font-bold">
        <h1>Library</h1>
      </div>
      <BookExplorer books={books} hideAddCart hideBuy />
    </div>
  );
}
