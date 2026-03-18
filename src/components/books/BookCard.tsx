import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { FavoriteButton } from "../ui/FavoriteButton";
import { CardButton } from "../ui/CardButton";
import { BookItemProps } from "./BookCardProps";
import { BookFavoriteButton } from "./BookFavoriteButton";

export const BookCard = ({
  book,
  hideAddCart,
  hideFavorite,
  hidePrice,
  hideImage,
  isList,
}: BookItemProps) => {
  const classNameGrid = `w-50 gap-2
    grid grid-cols-[1fr_1fr] grid-rows-[40px_auto_40px]
    [grid-template-areas:'cart_favorite''image_image''price_price']
  `;

  const classNameList = `h-56
          grid grid-cols-[10rem_1fr_auto] grid-rows-[40px_40px_1fr]
        [grid-template-areas:'image_name_favorite''image_description_cart''image_._price']
  `;

  return (
    <article
      className={` hover:shadow-lg bg-card rounded-card p-2 transition border border-car
          ${isList ? classNameList : classNameGrid}
        `}
    >
      {!hideImage && (
        <div
          className={`flex items-center  justify-center  ${
            isList ? "h-52" : "h-52"
          } [grid-area:image]`}
        >
          <Image
            className="w-40 h-50 select-none"
            src={book.cover ?? "https://placehold.co/600x400"}
            alt="placehold"
            height={800}
            width={600}
          />
        </div>
      )}

      {isList && (
        <div
          className={`[grid-area:name] flex items-center text-center pl-5 font-bold`}
        >
          {book.name}
        </div>
      )}

      {!hideFavorite && (
        <div
          className={`[grid-area:favorite] flex  ${
            isList ? "-mt-1" : "items-center justify-center"
          }`}
        >
          <FavoriteButton size={22} />
        </div>
      )}

      {!hidePrice && (
        <div
          className={`[grid-area:price] flex justify-center items-center ${
            isList ? "h-26 mt-4" : "px-2 "
          }`}
        >
          <CardButton
            className={`${
              isList
                ? "flex-col px-4  gap-3 flex py-4 w-full h-50"
                : "justify-between h-50  items-center pr-3 pl-2 py-6"
            } h-full w-full flex `}
          >
            <span className="border border-border-dark px-6 py-1.5 rounded-card font-bold">
              Buy
            </span>
            <span className="text-base font-extrabold">${book.price}</span>
          </CardButton>
        </div>
      )}
      {isList && (
        <div
          className={`[grid-area:description] font-montserrat text-sm px-5 pr-8 overflow-hidden  ${
            isList ? "line-clamp-4" : "truncate"
          }`}
        >
          {book.description}
        </div>
      )}
      {!hideAddCart && (
        <CardButton
          className={`h-10 [grid-area:cart] grid place-content-center ${
            isList ? "mt-3" : "ml-2 h-9 w-9"
          }`}
        >
          <IoCartOutline
            size={26}
            className="fill-btn-primary stroke-btn-primary "
          />
          {/*  add to cart */}
        </CardButton>
      )}

      <BookFavoriteButton isList={isList} book={book} />
    </article>
  );
};
