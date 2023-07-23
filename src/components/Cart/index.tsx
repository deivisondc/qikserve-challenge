"use client";

import { useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatCurrency";

import { CartItem } from "./CartItem";

const Cart = () => {
  const { items } = useCart();
  const { companyDetails } = useCompany();

  return (
    <section className="w-[300px] drop-shadow-lg">
      <header className=" bg-background-default">
        <h1 className="p-6 text-2xl font-medium">Carrinho</h1>
      </header>

      <div className="bg-white">
        {items.length === 0 && (
          <span className="p-6">Seu carrinho está vazio</span>
        )}

        {items.length > 0 && (
          <div>
            <CartItem />
            <CartItem />

            <div className="flex justify-between border-b bg-background-default p-4 pt-5">
              <span>Sub total</span>
              <span className="font-medium">
                {formatCurrency(22.5, {
                  locale: companyDetails.locale,
                  currency: companyDetails.ccy,
                })}
              </span>
            </div>
            <div className="flex justify-between bg-background-default p-4 text-2xl">
              <span className="font-light">Total:</span>
              <strong>
                {formatCurrency(48, {
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
