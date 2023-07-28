import { Carousel } from "@/components/Carousel";
import { SectionItemType } from "@/hooks/Menu/useMenu";
import { arrayHasElements } from "@/utils/arrayUtils";

interface DialogBannerProps {
  item: SectionItemType;
}

const DialogBanner = ({ item }: DialogBannerProps) => {
  if (!arrayHasElements(item.images)) {
    return null;
  }

  const imageSrcArray = item.images!.map((image) => image.image);

  return <Carousel imagesSrc={imageSrcArray} alt={item.name} />;
};

export { DialogBanner };
