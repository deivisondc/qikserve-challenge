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
    <>
      <div className={clsx("block bg-background-default", "lg:hidden")}>
        <div className="flex items-center justify-center border-y p-6">
          <SecondaryButton data-testid="allergy-button">
            View allergy information
          </SecondaryButton>
        </div>

        {isBasketButtonHidden && (
          <div
            className={clsx("h-20 bg-background-default p-6 pt-2", "lg:hidden")}
          />
        )}
      </div>
      {!isBasketButtonHidden && (
        <div
          className={clsx(
            "sticky bottom-0 h-20 bg-transparent p-6 pt-2 backdrop-blur-sm",
            "lg:hidden",
          )}
          style={{ zIndex: "var(--button-index)" }}
        >
          <PrimaryButton data-testid="basket-button" onClick={toggleCartModal}>
            Your basket - {itemAmountString}
          </PrimaryButton>
        </div>
      )}
    </>
  );
};

export { MobileFooter };
