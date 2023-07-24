import { ICartItem, useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatCurrency";

import { Counter } from "../Counter";

interface CartItemProps {
  item: ICartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const { companyDetails } = useCompany();
  const { updateCartItemAmount } = useCart();

  const modifierPrice =
    item.modifiers?.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0) || 0;

  const priceTotal = (item.price + modifierPrice) * item.amount;

  return (
    <div className="flex justify-between gap-4 p-4">
      <div className="flex w-full flex-col gap-2">
        <div>
          <p>{item.name}</p>
          {item.modifiers?.map((modifier) => (
            <p className="text-copy-inactive" key={modifier.id}>
              {modifier.name}
            </p>
          ))}
        </div>
        {/* TODO: adiciona remover amount item */}
        <Counter
          small
          initialValue={item.amount}
          onValueChange={(value) => updateCartItemAmount(item.id, value)}
        />
      </div>

      <strong>
        {formatCurrency(priceTotal, {
          locale: companyDetails.locale,
          currency: companyDetails.ccy,
        })}
      </strong>
    </div>
  );
};

export { CartItem };
