import {
  MultiSelectChips,
  SelectOption,
} from "@/components/ui/MultiSelectChips";

const BOOK_OPTIONS: SelectOption[] = [
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "cpp", label: "C++" },
  { id: "java", label: "Java" },
];

export const BooksFilter = ({
  onChange,
}: {
  onChange?: (values: string[]) => void;
}) => {
  return <MultiSelectChips options={BOOK_OPTIONS} onChange={onChange} />;
};
