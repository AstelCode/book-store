import Image from "next/image";

export const CommentItem = ({
  name,
  comment,
  userLogo,
}: {
  name: string;
  comment: string;
  userLogo: string;
}) => {
  return (
    <div className="grid grid-cols-[40px_auto] grid-rows-[40px_auto] bg-card border border-border-dark  p-5 rounded-card gap-2">
      <div className="col-start-1 grid place-content-center relative border border-border-dark rounded-full overflow-hidden">
        {userLogo ? (
          <Image src={userLogo} fill alt="user-logo" />
        ) : (
          <div className="w-10 h-10 bg-red-300 " />
        )}
      </div>
      <div className="col-start-2 flex items-center pl-2">{name}</div>
      <div className="col-start-1 col-end-3 row-start-2">{comment}</div>
    </div>
  );
};
