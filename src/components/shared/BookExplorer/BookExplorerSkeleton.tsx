import { BookCardSkeleton } from "./bookCard/BookCardSkeleton";

export const BookExplorerSkeleton = () => {
  const skeletons = Array.from({ length: 10 });

  return (
    <div className="h-full min-h-0 pt-6 grid grid-rows-[2.5rem_2rem_1fr] gap-5">
      {/* Buscador */}
      <div className="pr-6 animate-pulse">
        <div className="h-10 w-full max-w-160 bg-[#d4d4d8] border border-border-dark rounded-card" />
      </div>

      {/* Filtros */}
      <div className="flex gap-2 animate-pulse">
        <div className="h-8.5 w-24 bg-[#d4d4d8] border border-border-dark rounded-card" />
        <div className="h-8.5 w-24 bg-[#d4d4d8] border border-border-dark rounded-card" />
      </div>

      <div className="overflow-y-auto pr-4 pb-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-4">
          {skeletons.map((_, i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
