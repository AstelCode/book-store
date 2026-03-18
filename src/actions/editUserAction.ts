"use server";

import { editUser, markFavoriteBook } from "@/lib/UsersData";
import { GetCurrentUserAction } from "./authActions";
import { revalidatePath } from "next/cache";

export async function EditUserAction(formData: FormData) {
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
