"use client";
import { PiHeartStraightFill, PiHeartStraight } from "react-icons/pi";

export const FavoriteButton = ({
  size,
  className,
  active,
}: {
  size?: number;
  className?: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`${className} select-none w-30 h-full flex items-center justify-center`}
    >
      {active ? (
        <PiHeartStraightFill size={size} className="fill-black" />
      ) : (
        <PiHeartStraight size={size} className="fill-black" />
      )}
    </div>
  );
};
