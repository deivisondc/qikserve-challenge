import { ReactNode } from "react";

import { MenuProvider } from "./useMenu";

interface IMenuProviderContainer {
  children: ReactNode;
}

const MenuProviderContainer = async ({ children }: IMenuProviderContainer) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MENU_RESOURCE}`,
  );
  const data = await res.json();

  return <MenuProvider value={data}>{children}</MenuProvider>;
};

export { MenuProviderContainer };
