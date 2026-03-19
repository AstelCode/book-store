"use server";

import {
  AddToUserCart,
  MoveUserCartToUserLibrary,
  RemoveFromUserCart,
} from "@/lib/UsersData";
import { GetCurrentUserAction } from "./authActions";
import { refresh, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addBookToCartAction(bookId: string) {
  const user = await GetCurrentUserAction();
  if (!user) return;
  await AddToUserCart(user.id, bookId);
  revalidatePath("/dashboard", "layout");
}

export async function buyBookAction(bookId: string) {
  const user = await GetCurrentUserAction();
  if (!user) return;
  await AddToUserCart(user.id, bookId);
  revalidatePath("/dashboard", "layout");
  redirect("/dashboard/cart");
}

export async function removeBookFromCartAction(bookId: string) {
  const user = await GetCurrentUserAction();
  if (!user) return;
  await RemoveFromUserCart(user.id, bookId);
  revalidatePath("/dashboard", "layout");
}

export async function moveCartToLibraryAction(price: number) {
  const user = await GetCurrentUserAction();
  if (!user) return;
  await MoveUserCartToUserLibrary(user.id, price);
  revalidatePath("/dashboard", "layout");
}
