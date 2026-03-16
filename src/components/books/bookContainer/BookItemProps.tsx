"use client";

export interface BookItemProps {
  hideImage?: boolean;
  hideAddCart?: boolean;
  hideFavorite?: boolean;
  hidePrice?: boolean;
  showTrash?: boolean;

  price?: number;
  name?: string;
  src?: string;
  isList?: boolean;
  key: string;
}
