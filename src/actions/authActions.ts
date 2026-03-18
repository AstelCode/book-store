"use server";
import { findUser, getUserById, saveUser } from "@/lib/UsersData";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function SignUpAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  if (!email || !password || !name) return;

  const user = await saveUser(
    email as string,
    name as string,
    password as string
  );

  const req = await cookies();

  req.set("auth_token", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  redirect("/dashboard/library");
}

export async function SignInAction(formData: FormData) {
  const password = formData.get("password");
  const email = formData.get("email");
  if (!password || !email) return;

  const user = await findUser(email as string, password as string);
  if (!user) return;

  const req = await cookies();

  req.set("auth_token", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  if (user.admin) {
    req.set("isAdmin", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    redirect("/dashboard/user");
  }
  redirect("/dashboard/library");
}

export async function GetCurrentUserAction() {
  const id = (await cookies()).get("auth_token")?.value;
  if (!id) return null;
  const user = await getUserById(id);
  return user;
}

export async function IsUserLogged() {
  return !!(await cookies()).get("auth_token");
}

export async function IsAdminUser() {
  return !!(await cookies()).get("isAdmin");
}

export async function LogOutAction() {
  (await cookies()).delete("auth_token");
  (await cookies()).delete("isAdmin");
  redirect("/auth");
}
