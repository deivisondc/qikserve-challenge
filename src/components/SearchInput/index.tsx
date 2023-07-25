"use client";

import clsx from "clsx";

import { useMenu } from "@/hooks/Menu/useMenu";

import { Search } from "../Icons/Search";

const SearchInput = () => {
  const { filterQuery, handleSearchInputChange } = useMenu();

  return (
    <div
      className={clsx(
        "w-full cursor-text rounded-lg px-3 py-2.5 placeholder:text-copy-body ",
        "border border-input bg-white",
        "outline-2 focus-within:outline",
        "flex items-center gap-3",
      )}
    >
      <Search />

      <input
        className="w-full border-0 placeholder:text-copy-body focus:outline-none"
        placeholder="Search menu items"
        value={filterQuery}
        onChange={(event) => handleSearchInputChange(event.target.value)}
      />
    </div>
  );
};

export { SearchInput };
