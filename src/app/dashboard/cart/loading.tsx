export default function CartLoading() {
  return (
    <div className="h-full grid grid-rows-[1fr_13rem] lg:grid-rows-1 lg:grid-cols-[1fr_25rem] gap-6 py-6 animate-pulse">
      <div className="flex flex-col gap-5 pr-4 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-56 bg-card border border-border-dark rounded-card flex p-2 gap-4"
          >
            <div className="w-40 h-full bg-[#d4d4d8] rounded-md" />
            <div className="flex-1 py-4">
              <div className="h-6 w-3/4 bg-[#d4d4d8] rounded-md" />
              <div className="h-4 w-1/2 bg-[#d4d4d8] rounded-md mt-4" />
            </div>
            <div className="w-30 flex flex-col justify-end">
              <div className="h-10 w-full bg-[#d4d4d8] rounded-md" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center border border-border-dark rounded-md">
        <div className="w-full h-full bg-card py-10 flex flex-col gap-10">
          <div className="flex justify-between px-14">
            <div className="h-6 w-16 bg-[#d4d4d8] rounded" />
            <div className="h-6 w-20 bg-[#d4d4d8] rounded" />
          </div>
          <div className="px-12">
            <div className="w-full h-13 bg-[#d4d4d8] rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
