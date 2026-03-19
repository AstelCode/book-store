"use client";
import { addBookCommentAction } from "@/actions/bookAction";
import { Submit } from "@/components/ui/Submit";
import { TextArea } from "@/components/ui/TextArea";

export const AddCommentForm = ({ bookId }: { bookId: string }) => {
  const handleAction = async (formData: FormData) => {
    await addBookCommentAction(formData, bookId);
  };
  return (
    <form
      action={handleAction}
      className="flex flex-col gap-2 p-4 border rounded-card bg-card"
    >
      <label htmlFor="comment"> Comment</label>
      <TextArea name="comment" id="comment" />
      <Submit name="Add Comment" pedingMessage="Adding..." />
    </form>
  );
};
