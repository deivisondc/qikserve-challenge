import clsx from "clsx";

import { MobileFooter } from "../MobileFooter";
import { MenuList } from "./MenuList";
import { SectionDisplay } from "./SectionDisplay";

const Menu = () => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-1 flex-col gap-4 overflow-auto bg-white pt-5",
          "lg:px-4 lg:pb-6 lg:drop-shadow-lg",
        )}
      >
        <SectionDisplay />
        <MenuList />
      </div>
      <MobileFooter />
    </>
  );
};

export { Menu };
