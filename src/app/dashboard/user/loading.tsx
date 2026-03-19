export default function UserLoading() {
  return (
    <div className="h-full grid grid-rows-[10rem_1fr] py-4 gap-5 animate-pulse">
      <div className="grid grid-cols-[10rem_1fr_auto] bg-card border border-border-dark rounded-card relative">
        <div className="p-5 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-[#d4d4d8]" />
        </div>
        <div className="py-6 flex flex-col gap-3 justify-center">
          <div className="h-6 w-48 bg-[#d4d4d8] rounded-md" />
          <div className="h-4 w-64 bg-[#d4d4d8] rounded-md" />
        </div>
      </div>

      <div className="grid grid-rows-[3rem_1fr]">
        <div>
          <div className="h-6 w-32 bg-[#d4d4d8] rounded-md mb-2" />
          <div className="border-b border-b-btn-primary" />
        </div>
        <div className="border border-border-dark bg-card rounded-md mt-2 flex flex-col overflow-hidden">
          <div className="h-11 bg-card-hover border-b border-border-dark" />
          <div className="h-15 border-b border-border-dark bg-card m-2 rounded" />
          <div className="h-15 border-b border-border-dark bg-card m-2 rounded" />
          <div className="h-15 border-b border-border-dark bg-card m-2 rounded" />
        </div>
      </div>
    </div>
  );
}
