import Link from "next/link";
import { BookX } from "lucide-react";
import { GetCurrentUserAction, IsUserLogged } from "@/actions/authActions";

export default async function BookNotFound() {
  const user = await IsUserLogged();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex max-w-md flex-col items-center gap-5 rounded-card border border-border-dark bg-card p-10 text-center">
        <BookX className="h-20 w-20 text-text-muted" strokeWidth={1.5} />
        <h2 className="text-2xl font-bold font-montserrat text-foreground">
          Book not found
        </h2>
        <p className="text-text-muted font-inter">
          It looks like the book you are looking for doesn&apos;t exist in our
          catalog or has been removed.
        </p>
        {user ? (
          <Link
            href="/dashboard/store"
            className="mt-2 flex w-full justify-center rounded-md bg-btn-primary py-3 text-white font-inter hover:bg-btn-primary-hover transition"
          >
            Back to store
          </Link>
        ) : (
          <Link
            href="/auth"
            className="mt-2 flex w-full justify-center rounded-md bg-btn-primary py-3 text-white font-inter hover:bg-btn-primary-hover transition"
          >
            Back to auth
          </Link>
        )}
      </div>
    </div>
  );
}
