"use client";
import { HiSearch } from "react-icons/hi";
import { useDeferredValue, useEffect, useState } from "react";
import clsx from "clsx";

type SearchProps = {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const Search = ({
  onSearch,
  placeholder = "Search books...",
  className,
}: SearchProps) => {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), 400);
    return () => clearTimeout(t);
  }, [value]);
  const deferredValue = useDeferredValue(debounced);

  useEffect(() => {
    onSearch?.(deferredValue);
  }, [deferredValue, onSearch]);

  return (
    <div
      className={clsx(
        "border border-border-dark rounded-card flex bg-card max-w-160 transition ",
        className
      )}
    >
      <div className="h-10 w-10 flex items-center justify-center">
        <HiSearch size={20} className="fill-btn-primary" />
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="font-inter w-full outline-none text-lg bg-transparent pr-3"
      />

      {value && (
        <button
          onClick={() => setValue("")}
          className="px-3 text-sm text-gray-400 hover:text-black"
        >
          ✕
        </button>
      )}
    </div>
  );
};
