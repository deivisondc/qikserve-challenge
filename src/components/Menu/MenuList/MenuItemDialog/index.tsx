import * as Dialog from "@radix-ui/react-dialog";

import { SectionItemType } from "@/hooks/Menu/useMenu";

import { DialogBanner } from "./DialogBanner";
import { DialogCloseButton } from "./DialogCloseButton";
import { DialogFooter } from "./DialogFooter";
import { DialogTitle } from "./DialogTitle";
import { ModifierContainer } from "./ModifierContainer";

interface MenuItemDialogrops {
  item: SectionItemType;
}

const MenuItemDialog = ({ item }: MenuItemDialogrops) => {
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
        <Dialog.Content className="fixed left-[50%]  top-[50%] max-h-[720px] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] overflow-auto bg-white focus:outline-none">
          <div data-testid="item-dialog" className="relative">
            <DialogCloseButton />

            <DialogBanner item={item} />
            <DialogTitle item={item} />

            <ModifierContainer modifiers={item.modifiers} />

            <DialogFooter />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
};

export { MenuItemDialog };
