"use server";

import {
  getBookAction,
  getBookCommentsAction,
  getBooksAction,
} from "@/actions/bookAction";
import { Gallery } from "@/components/book/Gallery";
import { notFound, redirect } from "next/navigation";
import { AddCommentForm } from "../../../../components/book/AddCommentForm";
import { Comments } from "@/components/book/Comments";
import { BookInfo } from "@/components/book/BookInfo";

export default async function Book({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const book = await getBookAction(slug);

  if (!book) {
    notFound();
  }

  const comments = await getBookCommentsAction(slug);

  return (
    <div className="py-10 h-full ">
      <div className="h-full overflow-x-hidden overflow-y-auto pr-88">
        <div className="flex flex-col gap-8">
          <Gallery book={book!} />
          <div className="h-200 w-full p-5 flex-col gap-4 flex">
            <AddCommentForm bookId={slug} />
            <Comments comments={comments} />
          </div>
        </div>
      </div>
      <BookInfo book={book!} />
    </div>
  );
}

export async function generateStaticParams() {
  const books = await getBooksAction();

  const top10Books = books.slice(0, 10);

  return top10Books.map((book) => ({
    slug: book.id,
  }));
}
