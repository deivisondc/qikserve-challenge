import { SectionItemType } from "@/hooks/Menu/useMenu";
import { arrayHasElements } from "@/utils/arrayUtils";

interface DialogBannerProps {
  item: SectionItemType;
}

const DialogBanner = ({ item }: DialogBannerProps) => {
  if (!arrayHasElements(item.images)) {
    return null;
  }

  return (
    <img
      src={item.images[0].image}
      alt={item.name}
      height="320px"
      className="object-cover"
    />
  );
};

export { DialogBanner };
