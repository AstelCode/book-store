"use server";
import { markFavoriteBook } from "@/lib/UsersData";
import { GetCurrentUserAction } from "./authActions";

export async function markFavoriteBookAction(bookId: string) {
  const user = await GetCurrentUserAction();
  if (!user) return;
  markFavoriteBook(user?.id, bookId);
}
