"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { SectionItemType } from "../Menu/useMenu";

interface ICartProvider {
  children: ReactNode;
}

interface ICartContext {
  items: Array<number>;
}

const CartContext = createContext({} as ICartContext);

const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<ICartContext>({
    items: [1625704],
  } as ICartContext);

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
