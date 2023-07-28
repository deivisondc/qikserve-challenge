"use client";

import { useState } from "react";

import { useMenu } from "@/hooks/Menu/useMenu";
import { scrollTo } from "@/utils/scroll";

import { SectionDisplayItem } from "./SectionDisplayItem";

const SectionDisplay = () => {
  const { menu } = useMenu();

  const [activeSectionId, setActiveSectionId] = useState(menu?.sections[0]?.id);

  function handleSectionClick(id: number) {
    setActiveSectionId(id);

    scrollTo(id.toString());
  }

  return (
    <div className="flex gap-4 overflow-auto px-4 pb-5">
      {menu.sections.map((section) =>
        section.visible ? (
          <SectionDisplayItem
            key={section.id}
            section={section}
            isActive={section.id === activeSectionId}
            onClick={handleSectionClick}
          />
        ) : null,
      )}
    </div>
  );
};

export { SectionDisplay };
