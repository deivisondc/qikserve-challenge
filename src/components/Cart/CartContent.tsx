"use client";

import { useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatter";

import { CartItem } from "./CartItem";

const CartContent = () => {
  const { cartItems, cartTotalPrice } = useCart();
  const { companyDetails } = useCompany();

  return (
    <>
      <header className=" bg-white lg:bg-background-default">
        <h1 className="p-6 text-2xl font-medium">Basket</h1>
      </header>

      <div className="bg-white">
        {cartItems.length === 0 && (
          <span className="block p-6">Your basket is empty</span>
        )}

        {cartItems.length > 0 && (
          <div>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}

            <div className="flex justify-between border-b bg-background-default p-4 pt-5">
              <span>Sub total</span>
              <span className="font-medium">
                {formatCurrency(cartTotalPrice, {
                  locale: companyDetails.locale,
                  currency: companyDetails.ccy,
                })}
              </span>
            </div>
            <div className="flex justify-between bg-background-default p-4 text-2xl">
              <span className="font-light">Total:</span>
              <strong data-testid="cart-total-price">
                {formatCurrency(cartTotalPrice, {
                  locale: companyDetails.locale,
                  currency: companyDetails.ccy,
                })}
              </strong>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { CartContent };
