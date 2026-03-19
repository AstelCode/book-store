import Image from "next/image";
import { CardButton } from "../../../ui/CardButton";
import { BookItemProps } from "./BookCardProps";
import { BookFavoriteButton } from "./BookFavoriteButton";
import { BookAddToCartButton } from "./BookAddToCartButton";
import { BookRemoveFromCartButton } from "./BookRemoveFromCartButton";
import { BookEditButton } from "./BookEditButton";
import Link from "next/link";
import { BookBuyButton } from "./BookBuyButton";

export const BookCard = ({
  book,
  hideAddCart,
  hideFavorite,
  hideBuy,
  hideImage,
  showTrashCart,
  showPrice,
  showEdit,
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
    <Link
      href={`/dashboard/book/${book.id}`}
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

      {!hideBuy && (
        <div
          className={`[grid-area:price] flex justify-center items-center ${
            isList ? "h-26 mt-4" : "px-2 "
          }`}
        >
          <BookBuyButton isList={isList} book={book} />
        </div>
      )}

      {showPrice && (
        <div
          className={`[grid-area:price] flex justify-center items-end pb-5 pr-2`}
        >
          <span className="text-xl font-extrabold">${book.price}</span>
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

      {showTrashCart && (
        <BookRemoveFromCartButton isList={isList} book={book} />
      )}
      {!hideFavorite && <BookFavoriteButton isList={isList} book={book} />}
      {!hideAddCart && <BookAddToCartButton isList={isList} book={book} />}
      {showEdit && <BookEditButton isList={isList} book={book} />}
    </Link>
  );
};
