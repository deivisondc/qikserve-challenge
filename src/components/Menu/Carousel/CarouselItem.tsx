import clsx from "clsx";

import { SectionType } from "@/hooks/Menu/useMenu";

import { BorderedRoundImage } from "../../WhiteLabel/BorderedRoundImage";

interface CarouselItemProps {
  section: SectionType;
  isActive?: boolean;
  onClick: (id: number) => void;
}

const CarouselItem = ({ section, isActive, onClick }: CarouselItemProps) => {
  return (
    <button
      className={clsx(
        "flex w-[104px] cursor-pointer flex-col items-center border-copy-main",
        { "border-b-2": isActive },
      )}
      onClick={() => onClick(section.id)}
    >
      <BorderedRoundImage src={section.images[0].image} alt={section.name} />
      <span className="pb-2 pt-4 font-bold text-copy-main">{section.name}</span>
    </button>
  );
};

export { CarouselItem };
