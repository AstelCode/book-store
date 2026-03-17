"use client";
import Image from "next/image";
import { useState } from "react";
import { CiShop } from "react-icons/ci";
import { IoOpenOutline } from "react-icons/io5";
import { FavoriteButton } from "../FavoriteButton";
import { CardButton } from "../CardButton";
import { BookItemProps } from "./BookItemProps";

export const BookItem = ({
  price,
  name,
  src,
  hideAddCart,
  hideFavorite,
  hidePrice,

  hideImage,
  isList,
}: BookItemProps) => {
  const [favorite, setFavorite] = useState(false);

  const handleDoubleClick = () => {
    setFavorite(!favorite);
  };

  const onClickFavorite = () => {
    setFavorite(!favorite);
  };

  const classNameGrid = `w-80
    grid grid-cols-[30px_40px_1fr_40px_30px] grid-rows-[40px_1fr_40px]
    [grid-template-areas:'cart_._._._open''image_image_image_image_image''favorite_._name_price_price']
  `;

  const classNameList = `
          grid grid-cols-[10rem_120px_1fr_40px_30px] grid-rows-[40px_8rem_40px]
        [grid-template-areas:'image_name_name_favorite_open''image_._._._.''image_cart_._price_price']
  `;

  return (
    <article
      onDoubleClick={handleDoubleClick}
      className={`hover:shadow-lg bg-card  rounded-card p-2 transition 
          ${isList ? classNameList : classNameGrid}
        `}
    >
      {!hideImage && (
        <div
          className={`flex items-center justify-center font-inter ${isList ? "" : "h-40"} [grid-area:image]`}
        >
          <Image
            className="w-40 h-40 select-none"
            src={src ?? "https://placehold.co/600x400"}
            alt="placehold"
            height={600}
            width={600}
          />
        </div>
      )}

      <div
        className={`[grid-area:name] flex items-center ${isList ? "pl-5" : "justify-center"}`}
      >
        {name}
      </div>

      {!hideFavorite && (
        <div
          className={`[grid-area:favorite] flex  ${isList ? "pt-1" : "items-center justify-center"}`}
        >
          <FavoriteButton
            className=""
            size={22}
            onClick={onClickFavorite}
            active={favorite}
          />
        </div>
      )}

      {!hidePrice && (
        <div className="[grid-area:price] flex items-center justify-center font-extrabold text-lg">
          ${price}
        </div>
      )}

      {!hideAddCart && (
        <CardButton className={`h-8 [grid-area:cart] ${isList ? "ml-3" : ""}`}>
          <CiShop size={26} className="fill-btn-primary stroke-btn-primary " />
          {isList ? "add to cart" : ""}
        </CardButton>
      )}
      {/* 
      {showTrash && (
        <CardButton
          className={`h-8 ${isList ? "[grid-area:favorite] w-8" : "[grid-area:cart]"} `}
        >
          <BiTrash size={24} className="fill-btn-primary stroke-btn-primary" />
        </CardButton>
      )}
 */}
      <CardButton className="w-8 h-8 [grid-area:open]">
        <IoOpenOutline size={20} className="stroke-btn-primary" />
      </CardButton>
    </article>
  );
};
