import { Cart } from "@/components/Cart";
import { Menu } from "@/components/Menu";
import { SearchInput } from "@/components/SearchInput";
import { CartProvider } from "@/hooks/Cart/useCart";
import { MenuProviderContainer } from "@/hooks/Menu/MenuProviderContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-1.5">
      <MenuProviderContainer>
        <CartProvider>
          <SearchInput />

          <div className="flex w-full flex-1 gap-6 bg-background-default px-10 py-8 ">
            <Menu />
            <Cart />
          </div>
        </CartProvider>
      </MenuProviderContainer>
    </main>
  );
}
