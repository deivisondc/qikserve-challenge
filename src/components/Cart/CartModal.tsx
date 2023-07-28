"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { useCart } from "@/hooks/Cart/useCart";

import { DialogCloseButton } from "../Menu/MenuList/MenuItemDialog/DialogCloseButton";
import { PrimaryButton } from "../WhiteLabel/PrimaryButton";
import { CartContent } from "./CartContent";

const CartModal = () => {
  const { isCartModalOpen, toggleCartModal } = useCart();

  return (
    <Dialog.Root open={isCartModalOpen} onOpenChange={toggleCartModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
        <Dialog.Content className="fixed left-0 top-0 flex h-[100vh] w-[100vw] flex-col overflow-auto bg-white focus:outline-none">
          <DialogCloseButton />

          <div className="flex-1">
            <CartContent />
          </div>

          <div className="h-20 bg-background-default p-6 pt-2">
            <Dialog.Close className="w-full" asChild>
              <PrimaryButton>Checkout now</PrimaryButton>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { CartModal };
