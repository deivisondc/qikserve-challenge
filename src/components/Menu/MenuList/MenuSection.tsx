import Image from "next/image";

import { SectionType } from "@/hooks/Menu/useMenu";

import { MenuListItem } from "./MenuItem";

interface MenuListSectionProps {
  section: SectionType;
}

const MenuListSection = ({ section }: MenuListSectionProps) => {
  return (
    <>
      <button className="m-4 flex justify-between text-2xl font-medium">
        {section.name}

        <Image
          src="/arrow.svg"
          width={24}
          height={24}
          alt="Toggle section collapse"
        />
      </button>

      {section.items.map((item) => (
        <MenuListItem key={item.id} sectionId={section.id} item={item} />
      ))}
    </>
  );
};

export { MenuListSection };
