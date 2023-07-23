"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface IMenuProvider {
  children: ReactNode;
  value: MenuDetail;
}

type ImageType = {
  id: number;
  image: string;
};

export type SectionItemType = {
  id: number;
  name: string;
  description: string;
  available: boolean;
  images: Array<ImageType>;
  price: number;
  position: number;
  visible: boolean;
};

export type SectionType = {
  id: number;
  name: string;
  description: string;
  position: number;
  visible: boolean;
  images: Array<ImageType>;
  items: Array<SectionItemType>;
};

type MenuDetail = {
  sections: Array<SectionType>;
};

interface IMenuContext {
  menu: MenuDetail;
}

const MenuContext = createContext({} as IMenuContext);

const MenuProvider = ({ children, value }: IMenuProvider) => {
  const [menu] = useState(value);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};

const useMenu = () => {
  return useContext(MenuContext);
};

export { MenuProvider, useMenu };
