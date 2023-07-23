import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

import { X } from "@/components/Icons/X";

const DialogCloseButton = () => {
  return (
    <Dialog.Close asChild>
      <button
        className={clsx(
          "h-[28px] w-[28px] rounded-full bg-white",
          "flex items-center justify-center",
          "absolute right-4 top-4",
        )}
        aria-label="Close"
      >
        <X />
      </button>
    </Dialog.Close>
  );
};

export { DialogCloseButton };
