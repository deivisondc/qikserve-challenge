"use client";

import clsx from "clsx";

import { useCart } from "@/hooks/Cart/useCart";

import { PrimaryButton } from "../WhiteLabel/PrimaryButton";
import { SecondaryButton } from "../WhiteLabel/SecondaryButton";

const MobileFooter = () => {
  const { cartItems, toggleCartModal } = useCart();

  const isBasketButtonHidden = cartItems.length == 0;
  const itemAmountSum =
    cartItems.length && cartItems.reduce((acc, cur) => acc + cur.amount, 0);
  const itemAmountString =
    itemAmountSum === 1 ? "1 item" : `${itemAmountSum} items`;

  return (
    <div className={clsx("block bg-background-default", "lg:hidden")}>
      <div className="flex items-center justify-center border-y p-6">
        <SecondaryButton>View allergy information</SecondaryButton>
      </div>
      <div className="h-20 p-6 pt-2">
        {!isBasketButtonHidden && (
          <PrimaryButton onClick={toggleCartModal}>
            Your basket - {itemAmountString}
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export { MobileFooter };
