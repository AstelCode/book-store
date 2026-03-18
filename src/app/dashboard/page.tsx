import { IsUserLogged } from "@/actions/authActions";
import { redirect } from "next/navigation";

export default async function Page() {
  const logged = await IsUserLogged();
  if (logged) {
    redirect("/dashboard/store");
  }
  redirect("/auth");
}
