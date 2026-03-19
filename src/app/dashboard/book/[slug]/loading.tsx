export default function BookLoading() {
  return (
    <div className="py-10 h-full relative animate-pulse">
      <div className="h-full overflow-hidden pr-88">
        <div className="flex flex-col gap-8 items-center">
          <div className="w-full max-w-90 aspect-[2/3] bg-card border border-border-dark rounded-md flex flex-col">
            <div className="flex-1 bg-[#d4d4d8] rounded-t-md m-1" />
            <div className="h-40 bg-[#c4c4c8] rounded-b-md m-1 mt-0 flex gap-2 p-2">
              <div className="w-30 h-full bg-[#d4d4d8] rounded" />
              <div className="w-30 h-full bg-[#d4d4d8] rounded" />
            </div>
          </div>
          <div className="h-200 w-full p-5 flex-col gap-4 flex">
            <div className="h-40 bg-card border border-border-dark rounded-card" />
            <div className="h-24 bg-card border border-border-dark rounded-card" />
            <div className="h-24 bg-card border border-border-dark rounded-card" />
          </div>
        </div>
      </div>

      <div className="fixed w-88 right-10 top-5 bg-card rounded-md border border-border-dark p-6 gap-3 flex flex-col h-[calc(100%-40px)]">
        <div className="h-8 w-3/4 bg-[#d4d4d8] rounded-md" />
        <div className="flex-1 mt-4">
          <div className="h-4 w-full bg-[#d4d4d8] rounded-md mb-2" />
          <div className="h-4 w-full bg-[#d4d4d8] rounded-md mb-2" />
          <div className="h-4 w-5/6 bg-[#d4d4d8] rounded-md mb-2" />
        </div>
        <div className="w-full h-32 border bg-white rounded-md flex flex-col p-3 gap-5 shadow-sm mt-auto">
          <div className="h-6 w-1/2 bg-[#d4d4d8] rounded-md" />
          <div className="h-10 w-full bg-[#d4d4d8] rounded-md" />
        </div>
      </div>
    </div>
  );
}
