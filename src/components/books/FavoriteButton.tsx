"use client";
import { useState } from "react";
import { PiHeartStraightFill, PiHeartStraight } from "react-icons/pi";

export const FavoriteButton = ({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  // 1. El estado ahora vive dentro del botón
  const [favorite, setFavorite] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite); // 2. El botón se actualiza a sí mismo
  };

  return (
    <div
      onClick={handleClick}
      className={`${className} select-none cursor-pointer size-10 flex items-center justify-center`}
    >
      {favorite ? (
        <PiHeartStraightFill size={size} className="fill-accent" />
      ) : (
        <PiHeartStraight size={size} />
      )}
    </div>
  );
};
