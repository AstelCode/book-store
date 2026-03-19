"use server";

import { editUser } from "@/lib/UsersData";
import { GetCurrentUserAction } from "./authActions";
import { revalidatePath } from "next/cache";
import { getBooksAction } from "./bookAction";
import { delay } from "@/utils/utils";

export async function editUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const logoFile = formData.get("logo") as File;
  const user = await GetCurrentUserAction();
  if (!user) return;

  let logoBase64: string | undefined;
  if (logoFile && logoFile.size > 0) {
    const bytes = await logoFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64String = buffer.toString("base64");
    logoBase64 = `data:${logoFile.type};base64,${base64String}`;
  }

  await editUser(user.id, {
    name,
    description,
    ...(logoBase64 && { logoSrc: logoBase64 }),
  });
  revalidatePath("/user");
}

export async function getUserCartAction() {
  const user = await GetCurrentUserAction();
  if (!user) return [];

  const books = await getBooksAction({
    ids: user.cart,
  });

  return books;
}

export async function getUserStore() {
  await delay(3000);
  const user = await GetCurrentUserAction();
  if (!user) return [];
  const books = await getBooksAction({
    excludeIds: [...user.cart, ...user.library],
  });
  return books;
}

export async function getUserLibrary() {
  const user = await GetCurrentUserAction();
  if (!user) return [];
  const books = await getBooksAction({
    ids: user.library,
  });
  return books;
}
