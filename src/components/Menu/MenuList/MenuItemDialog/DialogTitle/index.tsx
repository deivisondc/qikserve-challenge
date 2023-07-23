import * as Dialog from "@radix-ui/react-dialog";

import { SectionItemType } from "@/hooks/Menu/useMenu";

interface DialogTitleProps {
  item: SectionItemType;
}

const DialogTitle = ({ item }: DialogTitleProps) => {
  return (
    <>
      <Dialog.Title className="p-4 pb-2 text-2xl font-bold">
        {item.name}
      </Dialog.Title>

      <Dialog.Description className="p-4 pt-0 text-copy-secondary">
        {item.description}
      </Dialog.Description>
    </>
  );
};

export { DialogTitle };
