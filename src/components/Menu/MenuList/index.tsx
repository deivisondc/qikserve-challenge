"use client";

import { useMenu } from "@/hooks/Menu/useMenu";

import { MenuListSection } from "./MenuSection";

const MenuList = () => {
  const { filteredMenu } = useMenu();

  return (
    <>
      {filteredMenu.sections.map((section) => (
        <MenuListSection key={section.id} section={section} />
      ))}
    </>
  );
};

export { MenuList };
