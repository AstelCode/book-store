import { CommentItem } from "./CommentItem";

export const Comments = ({
  comments,
}: {
  comments: { userLogo: string; name: string; comment: string; id: string }[];
}) => {
  return (
    <div className="flex flex-col gap-3">
      {comments.map((item) => (
        <CommentItem {...item} key={item.id} />
      ))}
    </div>
  );
};
