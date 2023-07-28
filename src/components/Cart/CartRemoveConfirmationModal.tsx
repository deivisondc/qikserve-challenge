import * as AlertDialog from "@radix-ui/react-alert-dialog";

import { ICartItem } from "@/hooks/Cart/useCart";

interface CartRemoveConfirmationModalProps {
  isModalOpen: boolean;
  item?: ICartItem;
  handleModalConfirmation: (value: boolean) => void;
}

const CartRemoveConfirmationModal = ({
  isModalOpen,
  item,
  handleModalConfirmation,
}: CartRemoveConfirmationModalProps) => {
  const modifiers =
    item && item.modifiers?.map((modifier) => modifier.name).join(", ");
  const itemName = item && `${item.name} ${modifiers ? `(${modifiers})` : ""}`;

  return (
    <AlertDialog.Root open={isModalOpen}>
      <AlertDialog.Trigger />
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 z-10 bg-black opacity-60" />
        <AlertDialog.Content className="fixed left-[50%] top-[50%] z-20 max-h-[720px] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] overflow-auto bg-white focus:outline-none">
          <AlertDialog.Title className="border-b p-4 pb-2 text-2xl font-bold">
            Atention
          </AlertDialog.Title>

          <AlertDialog.Description
            data-testid="remove-dialog-description"
            className="px-6 py-4 text-copy-body"
          >
            You are about to remove the item{" "}
            <span className="font-medium">{itemName?.trim()}</span> from the
            basket. Do you want to continue?
          </AlertDialog.Description>

          <div className="flex items-center justify-end gap-4 px-6 py-4">
            <AlertDialog.Cancel
              data-testid="remove-dialog-cancel-button"
              onClick={() => handleModalConfirmation(false)}
              className="rounded border bg-white px-4 py-2 font-medium hover:bg-background-subtle"
            >
              No
            </AlertDialog.Cancel>
            <AlertDialog.Action
              data-testid="remove-dialog-confirm-button"
              onClick={() => handleModalConfirmation(true)}
              className="rounded border border-red-300 bg-red-200 px-4 py-2 font-medium text-red-800 transition-colors hover:bg-red-300"
            >
              Yes
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export { CartRemoveConfirmationModal };
