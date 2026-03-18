import { IsAdminUser, IsUserLogged } from "@/actions/authActions";
import { AuthContainer } from "@/components/auth/AuthContainer";
import { redirect } from "next/navigation";
export default async function Login() {
  const logged = await IsUserLogged();
  const isAdmin = await IsAdminUser();

  if (logged) {
    if (isAdmin) {
      redirect("/dashboard/user");
    } else {
      redirect("/dashboard/books");
    }
  }

  return (
    <div className="w-full h-screen items-center justify-center flex">
      <AuthContainer />
    </div>
  );
}
