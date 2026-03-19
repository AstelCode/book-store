import { Book } from "@/lib/BooksData";
import { CardButton } from "@/components/ui/CardButton";
import { MdModeEdit } from "react-icons/md";

export const BookEditButton = ({
  isList,
}: {
  isList?: boolean;
  book: Book;
}) => {
  return (
    <CardButton
      className={`h-10  grid place-content-center ${isList ? "mt-2 [grid-area:favorite]" : "[grid-area:cart] ml-2 h-9 w-9"}`}
    >
      <MdModeEdit size={26} className="fill-btn-primary stroke-btn-primary " />
    </CardButton>
  );
};
