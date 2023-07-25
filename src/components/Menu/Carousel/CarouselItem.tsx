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
        "group flex w-[104px] cursor-pointer flex-col items-center border-b-2",
        { "border-copy-main": isActive, "border-transparent": !isActive },
      )}
      onClick={() => onClick(section.id)}
    >
      <BorderedRoundImage src={section.images[0].image} alt={section.name} />
      <span
        className={clsx("pb-2 pt-4 font-bold text-copy-main", {
          "group-hover:underline": !isActive,
        })}
      >
        {section.name}
      </span>
    </button>
  );
};

export { CarouselItem };
