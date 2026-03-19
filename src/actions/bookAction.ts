"use server";
import { markFavoriteBook, usersDBMap } from "@/lib/UsersData";
import { GetCurrentUserAction, IsAdminUser } from "./authActions";
import { revalidatePath } from "next/cache";
import { addBook, addComment, getBook, getBooks } from "@/lib/BooksData";
import { v4 as uuid } from "uuid";
import { redirect } from "next/navigation";
export async function markFavoriteBookAction(bookId: string) {
  const user = await GetCurrentUserAction();
  if (!user) return;
  markFavoriteBook(user?.id, bookId);
  revalidatePath("/dashboard/store");
}

interface FilterParams {
  ids?: string[];
  excludeIds?: string[];
  languages?: string[];
}

export async function getBooksAction(filterParams?: FilterParams) {
  let books = await getBooks();

  if (!filterParams) return books;

  const { ids, languages, excludeIds } = filterParams;

  if (ids) {
    const idSet = new Set(ids);
    books = books.filter((book) => idSet.has(book.id));
  }
  if (excludeIds) {
    const excludeIdSet = new Set(excludeIds);
    books = books.filter((book) => !excludeIdSet.has(book.id));
  }

  if (languages) {
    books = books.filter((book) =>
      book.languages?.some((lang) => languages.includes(lang)),
    );
  }

  return books;
}

export async function addBookAction(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const coverFile = formData.get("cover") as File;
  const price = formData.get("price") as string;
  const language = formData.get("language") as string;
  if (
    !name ||
    !description ||
    !price ||
    !language ||
    !coverFile ||
    (coverFile && coverFile.size == 0)
  )
    return;

  let coverBase64: string | undefined;
  if (coverFile && coverFile.size > 0) {
    const bytes = await coverFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64String = buffer.toString("base64");
    coverBase64 = `data:${coverFile.type};base64,${base64String}`;
  }

  await addBook({
    name,
    description,
    price: +price,
    languages: [language],
    comments: [],
    id: uuid(),
    cover: coverBase64,
  });

  revalidatePath("/dashboard");

  redirect("/store");
}
export async function getBookAction(bookId: string) {
  return await getBook(bookId);
}

export async function addBookCommentAction(formData: FormData, bookId: string) {
  const comment = formData.get("comment") as string;
  if (!comment) return;
  const user = await GetCurrentUserAction();
  if (!user) return;
  await addComment(comment, user.id, bookId);
  revalidatePath("/dashboard/book");
}

export async function getBookCommentsAction(bookId: string) {
  const book = await getBook(bookId);
  if (!book) return [];
  return book.comments
    .map((item) => {
      const user = usersDBMap.get(item.userId);
      if (!user) return;

      return {
        id: item.id,
        userLogo: user.logoSrc,
        name: user.name,
        comment: item.comment,
      };
    })
    .filter(Boolean) as {
    id: string;
    userLogo: string;
    name: string;
    comment: string;
  }[];
}
