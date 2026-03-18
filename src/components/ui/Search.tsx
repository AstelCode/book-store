import { HiSearch } from "react-icons/hi";

export const Search = () => {
  return (
    <div className="border border-border-dark rounded-card flex bg-card max-w-160">
      <div className="h-10 w-10 flex items-center justify-center">
        <HiSearch size={20} className="fill-btn-primary" />
      </div>
      <input
        placeholder="Search"
        className="font-inter w-full outline-none text-lg"
      />
    </div>
  );
};
