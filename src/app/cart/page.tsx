import { BooksContainer } from "@/components/books/bookContainer/BooksContainer";

export default function Cart() {
  return (
    <div className="h-full grid grid-rows-[1fr_13rem] lg:grid-rows-1 lg:grid-cols-[1fr_30rem]  gap-6 py-6">
      <BooksContainer hideControls list hideFavorite hideAddCart />
      <div className="flex justify-center items-center ">
        <div className="w-full h-full bg-card py-10 flex flex-col gap-10">
          <div className="flex justify-between px-14">
            <h6 className="font-inter text-xl">Total</h6>
            <span className="font-inter font-extrabold text-xl">${200}</span>
          </div>
          <div className="px-15">
            <button className="w-full h-13 bg-btn-primary text-white text-2xl rounded-sm hover:bg-btn-primary-hover">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
