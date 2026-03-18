import Image from "next/image";
import { CiShop } from "react-icons/ci";
import { IoCartOutline, IoOpenOutline } from "react-icons/io5";
import { FavoriteButton } from "./FavoriteButton";
import { CardButton } from "./CardButton";
import { BookItemProps } from "./BookCardProps";
import { BiExpandAlt } from "react-icons/bi";

export const BookCard = ({
  price,
  name,
  cover,
  hideAddCart,
  hideFavorite,
  hidePrice,
  hideImage,
  isList,
}: BookItemProps) => {
  const classNameGrid = `w-80
    grid grid-cols-[30px_40px_1fr_40px_30px] grid-rows-[40px_auto_40px]
    [grid-template-areas:'cart_._._._open''image_image_image_image_image''favorite_._name_price_price']
  `;

  const classNameList = `
          grid grid-cols-[10rem_120px_1fr_40px_30px] grid-rows-[40px_8rem_40px]
        [grid-template-areas:'image_name_name_favorite_open''image_._._._.''image_cart_._price_price']
  `;

  return (
    <article
      className={`hover:shadow-lg bg-card rounded-card p-2 transition border border-car
          ${isList ? classNameList : classNameGrid}
        `}
    >
      {!hideImage && (
        <div
          className={`flex items-center h-50 justify-center font-inter ${isList ? "" : "h-40"} [grid-area:image]`}
        >
          <Image
            className="w-40 h-40 select-none"
            src={cover ?? "https://placehold.co/600x400"}
            alt="placehold"
            height={600}
            width={600}
          />
        </div>
      )}

      {isList && (
        <div
          className={`[grid-area:name] flex items-center text-center ${isList ? "pl-5" : "justify-center"}`}
        >
          {name}
        </div>
      )}

      {!hideFavorite && (
        <div
          className={`[grid-area:favorite] flex  ${isList ? "-mt-1" : "items-center justify-center"}`}
        >
          <FavoriteButton size={22} />
        </div>
      )}

      {!hidePrice && (
        <div className="[grid-area:price] flex items-center justify-center font-extrabold text-lg">
          ${price}
        </div>
      )}

      {!hideAddCart && (
        <CardButton className={`h-8 [grid-area:cart] ${isList ? "ml-3" : ""}`}>
          <IoCartOutline
            size={26}
            className="fill-btn-primary stroke-btn-primary "
          />
          {isList ? "add to cart" : ""}
        </CardButton>
      )}
      <CardButton className="w-8 h-8 [grid-area:open]">
        <BiExpandAlt size={20} className="stroke-btn-primary" />
      </CardButton>
    </article>
  );
};
