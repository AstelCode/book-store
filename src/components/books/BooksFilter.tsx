"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

type Option = {
  id: string;
  label: string;
};

const OPTIONS: Option[] = [
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "cpp", label: "C++" },
  { id: "java", label: "Java" },
];

const BookFilterOption = ({
  option,
  selected,
  onToggle,
}: {
  option: Option;
  selected: boolean;
  onToggle: (id: string) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(option.id)}
      className={clsx(
        "text-[14px] h-8.5 select-none px-3 border rounded-card font-inter transition cursor-pointer",
        " ",
        selected
          ? "bg-slate-800 text-white border-slate-800"
          : "bg-[#f9fafb] hover:bg-[#e4e4e4] text-black border-[#9a9ca0]"
      )}
    >
      {option.label}
    </button>
  );
};

export const BooksFilter = ({
  onChange,
}: {
  onChange?: (values: string[]) => void;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      return updated;
    });
  };

  useEffect(() => {
    onChange?.(selectedOptions);
  }, [selectedOptions, onChange]);
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {OPTIONS.map((option) => (
        <BookFilterOption
          key={option.id}
          option={option}
          selected={selectedOptions.includes(option.id)}
          onToggle={toggleOption}
        />
      ))}
    </div>
  );
};
