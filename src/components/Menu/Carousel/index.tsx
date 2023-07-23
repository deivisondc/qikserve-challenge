"use client";

import { useState } from "react";

import { useMenu } from "@/hooks/Menu/useMenu";

import { CarouselItem } from "./CarouselItem";

const Carousel = () => {
  const { menu } = useMenu();

  const [activeSectionId, setActiveSectionId] = useState(0);

  function handleSectionClick(id: number) {
    setActiveSectionId(id);
  }

  return (
    <div className="flex gap-4 px-4 pb-6 pt-5">
      {menu.sections.map((section) => (
        <CarouselItem
          key={section.id}
          section={section}
          isActive={section.id === activeSectionId}
          onClick={handleSectionClick}
        />
      ))}
    </div>
  );
};

export { Carousel };
