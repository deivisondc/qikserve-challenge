"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useDeferredValue,
  useMemo,
  useState,
} from "react";

import { arrayHasElements } from "@/utils/arrayUtils";

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
  visible: number;
  modifiers?: Array<Modifier>;
};

export type SectionType = {
  id: number;
  name: string;
  description: string;
  position: number;
  visible: number;
  images: Array<ImageType>;
  items: Array<SectionItemType>;
};

type MenuDetail = {
  sections: Array<SectionType>;
};

interface IMenuContext {
  menu: MenuDetail;
  filteredMenu: MenuDetail;
  filterQuery: string;
  handleSearchInputChange: (value: string) => void;
}

const MenuContext = createContext({} as IMenuContext);

const MenuProvider = ({ children, value }: IMenuProvider) => {
  const [menu] = useState(value);
  const [filterQuery, setFilterQuery] = useState("");
  const defferedFilterQuery = useDeferredValue(filterQuery);

  const filteredMenu = useMemo(() => {
    if (!defferedFilterQuery) {
      return menu;
    }

    const filteredSections = menu.sections.map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.name.toLowerCase().includes(defferedFilterQuery.toLowerCase()),
      ),
    }));

    return {
      ...menu,
      sections: filteredSections.filter((filteredSection) =>
        arrayHasElements(filteredSection.items),
      ),
    };
  }, [menu, defferedFilterQuery]);

  const handleSearchInputChange = (value: string) => {
    // startTransition(() => {
    setFilterQuery(value);
    // });
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        filteredMenu,
        filterQuery,
        handleSearchInputChange,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = () => {
  return useContext(MenuContext);
};

export { MenuProvider, useMenu };
