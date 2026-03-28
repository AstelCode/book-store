import { GetCurrentUserAction } from "@/actions/authActions";
import { UserProvider } from "@/context/UserContext";
import { Nav } from "@/components/Nav/Nav";
import { Toaster } from "react-hot-toast";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await GetCurrentUserAction();
  return (
    <UserProvider initialUser={currentUser}>
      <Toaster />
      <div className="h-screen grid grid-cols-[6rem_1fr] gap-9 pr-10 pl-1 relative">
        <Nav />
        <div className="h-full overflow-hidden ">{children}</div>
      </div>
    </UserProvider>
  );
}
