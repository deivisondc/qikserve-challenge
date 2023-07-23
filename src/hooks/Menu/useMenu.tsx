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

export type ModifierItem = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  available: boolean;
};

export type Modifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: Array<ModifierItem>;
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
  modifiers?: Array<Modifier>;
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
