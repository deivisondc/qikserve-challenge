import clsx from "clsx";

import { Cart } from "@/components/Cart";
import { CartModal } from "@/components/Cart/CartModal";
import { Menu } from "@/components/Menu";
import { SearchInput } from "@/components/SearchInput";
import { CartProvider } from "@/hooks/Cart/useCart";
import { MenuProviderContainer } from "@/hooks/Menu/MenuProviderContainer";

export default function Home() {
  return (
    <main className={clsx("flex flex-col items-center justify-between")}>
      <MenuProviderContainer>
        <CartProvider>
          <div className={clsx("w-full", "lg:px-0 lg:py-1.5", "p-4")}>
            <SearchInput />
          </div>

          <div
            className={clsx(
              "flex w-full flex-1 gap-6 bg-background-default",
              "lg:flex-row lg:px-10 lg:py-8",
              "flex-col",
            )}
          >
            <Menu />
            <Cart.Container />

            <Cart.Modal />
          </div>
        </CartProvider>
      </MenuProviderContainer>
    </main>
  );
}
