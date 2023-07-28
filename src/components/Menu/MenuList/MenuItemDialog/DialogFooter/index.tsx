"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { Counter } from "@/components/Counter";
import { PrimaryButton } from "@/components/WhiteLabel/PrimaryButton";
import { useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatter";

const DialogFooter = () => {
  const { companyDetails } = useCompany();
  const { selectedItem, updateSelectedItemAmount, addSelectedItemToCart } =
    useCart();

  const modifierPrice = selectedItem
    ? selectedItem.modifiers?.reduce((acc, cur) => {
        const modifierItems = cur.items;
        const itemPriceSum = modifierItems.reduce(
          (accItem, curItem) => accItem + curItem.price,
          0,
        );

        return acc + itemPriceSum;
      }, 0) || 0
    : 0;

  const priceTotal = selectedItem
    ? (selectedItem.price + modifierPrice) * selectedItem.amount
    : 0;

  const isButtonDisabled =
    selectedItem?.requiredModifiersAmount !==
    (selectedItem?.modifiers || [])?.length;

  return (
    <div className="sticky bottom-0 flex w-full flex-col items-center gap-2 bg-transparent p-6 pt-2 backdrop-blur-sm">
      <Counter
        minValue={1}
        onValueChange={(value) => updateSelectedItemAmount(value)}
      />

      <Dialog.Close asChild>
        <div className="w-full">
          <PrimaryButton
            disabled={isButtonDisabled}
            onClick={addSelectedItemToCart}
          >
            Add to order -{" "}
            {formatCurrency(priceTotal ?? 0, {
              locale: companyDetails.locale,
              currency: companyDetails.ccy,
            })}
          </PrimaryButton>
        </div>
      </Dialog.Close>
    </div>
  );
};

export { DialogFooter };
