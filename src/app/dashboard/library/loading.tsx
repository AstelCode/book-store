import { BookExplorerSkeleton } from "@/components/shared/BookExplorer/BookExplorerSkeleton";

export default function LibraryLoading() {
  return (
    <div className="grid grid-rows-[3.5rem_1fr] h-full">
      <div className="h-22 flex items-center">
        <div className="h-8 w-32 bg-[#d4d4d8] rounded-md animate-pulse" />
      </div>
      <BookExplorerSkeleton />
    </div>
  );
}
