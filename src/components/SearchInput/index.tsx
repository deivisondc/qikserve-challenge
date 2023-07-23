import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="flex w-full cursor-text items-center gap-3 rounded-lg border border-input bg-white px-3 py-2.5 outline-2 placeholder:text-copy-body focus-within:outline">
      <Image src="/search.svg" width={24} height={24} alt="Seach menu items" />
      <input
        className="w-full border-0 placeholder:text-copy-body focus:outline-none"
        placeholder="Search menu items"
      />
    </div>
  );
};

export { SearchInput };
