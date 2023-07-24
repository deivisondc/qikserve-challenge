"use client";

import { useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatCurrency";

import { CartItem } from "./CartItem";

const Cart = () => {
  const { cartItems, cartTotalPrice } = useCart();
  const { companyDetails } = useCompany();

  return (
    <section className="flex-shrink-0 flex-grow-0 basis-[300px] drop-shadow-lg">
      <header className=" bg-background-default">
        <h1 className="p-6 text-2xl font-medium">Carrinho</h1>
      </header>

      <div className="bg-white">
        {cartItems.length === 0 && (
          <span className="block p-6">Seu carrinho está vazio</span>
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
              <strong>
                {formatCurrency(cartTotalPrice, {
                  locale: companyDetails.locale,
                  currency: companyDetails.ccy,
                })}
              </strong>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { Cart };
