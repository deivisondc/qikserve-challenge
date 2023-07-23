import { Menu } from "@/components/Menu";
import { SearchInput } from "@/components/SearchInput";
import { MenuProviderContainer } from "@/hooks/Menu/MenuProviderContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-1.5">
      <MenuProviderContainer>
          <SearchInput />

          <div className="grid w-full flex-1 grid-cols-[1fr_300px] grid-rows-[auto_1fr] gap-6 bg-background-default px-10 py-8 ">
            <Menu />
          </div>
      </MenuProviderContainer>
    </main>
  );
}
