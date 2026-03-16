const BookFilterOption = () => {
  /* bg-[#1e293b] */
  return (
    <button className="bg-[#f9fafb] hover:bg-[#e4e4e4] text-[14px] h-8.5 px-2.75 border border-[#9a9ca0]  rounded-3xl font-inter">
      Opcion
    </button>
  );
};

export const BooksFilter = () => {
  return (
    <div className="flex gap-2 items-center">
      <BookFilterOption />
      <BookFilterOption />
      <BookFilterOption />
      <BookFilterOption />
    </div>
  );
};
