export interface BookItemProps {
  hideImage?: boolean;
  hideAddCart?: boolean;
  hideFavorite?: boolean;
  hidePrice?: boolean;
  showTrash?: boolean;

  price?: number;
  name?: string;
  cover?: string;
  isList?: boolean;
  key: string;
}
