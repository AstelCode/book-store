export const BookCardSkeleton = () => {
  return (
    <div className="w-50 h-[21rem] gap-2 bg-card rounded-card p-2 border border-border-dark animate-pulse flex flex-col">
      <div className="w-full h-52 bg-[#d4d4d8] rounded-md" />
      <div className="w-3/4 h-5 bg-[#d4d4d8] rounded-md mx-auto mt-4" />
      <div className="w-full h-10 bg-[#d4d4d8] rounded-md mt-auto" />
    </div>
  );
};
