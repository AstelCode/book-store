"use client";
import { PiHeartStraightFill, PiHeartStraight } from "react-icons/pi";

export const FavoriteButton = ({
  size,
  active,
  onClick,
  className,
}: {
  size?: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.();
  };
  return (
    <div onClick={handleClick} className={`${className}  select-none`}>
      {active ? (
        <PiHeartStraightFill size={size} />
      ) : (
        <PiHeartStraight size={size} />
      )}
    </div>
  );
};
