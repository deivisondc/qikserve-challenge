import clsx from "clsx";

import { MobileFooter } from "../MobileFooter";
import { PrimaryButton } from "../WhiteLabel/PrimaryButton";
import { SecondaryButton } from "../WhiteLabel/SecondaryButton";
import { Carousel } from "./Carousel";
import { MenuList } from "./MenuList";

const Menu = () => {
  return (
    <div
      className={clsx(
        "flex flex-1 flex-col gap-4 overflow-auto bg-white pt-5",
        "lg:px-4 lg:pb-6 lg:drop-shadow-lg",
      )}
    >
      <Carousel />
      <MenuList />

      <MobileFooter />
    </div>
  );
};

export { Menu };
