"use client";
import { useState } from "react";
import clsx from "clsx";

export type SelectOption = {
  id: string;
  label: string;
};

type MultiSelectChipsProps = {
  options: SelectOption[];
  value?: string[]; // controlado (opcional)
  defaultValue?: string[]; // no controlado
  onChange?: (values: string[]) => void;
  className?: string;
};

const Chip = ({
  option,
  selected,
  onToggle,
}: {
  option: SelectOption;
  selected: boolean;
  onToggle: (id: string) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(option.id)}
      className={clsx(
        "text-[14px] h-8.5 select-none px-3 border rounded-card font-inter transition cursor-pointer",
        selected
          ? "bg-slate-800 text-white border-slate-800"
          : "bg-[#f9fafb] hover:bg-[#e4e4e4] text-black border-[#9a9ca0]",
      )}
    >
      {option.label}
    </button>
  );
};

export const MultiSelectChips = ({
  options,
  value,
  defaultValue = [],
  onChange,
  className,
}: MultiSelectChipsProps) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);

  const isControlled = value !== undefined;
  const selectedValues = isControlled ? value : internalValue;

  const toggleOption = (id: string) => {
    const updated = selectedValues.includes(id)
      ? selectedValues.filter((item) => item !== id)
      : [...selectedValues, id];

    if (!isControlled) {
      setInternalValue(updated);
    }

    onChange?.(updated);
  };

  return (
    <div className={clsx("flex gap-2 items-center flex-wrap", className)}>
      {options.map((option) => (
        <Chip
          key={option.id}
          option={option}
          selected={selectedValues.includes(option.id)}
          onToggle={toggleOption}
        />
      ))}
    </div>
  );
};
