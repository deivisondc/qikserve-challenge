import { ICartItem, useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatter";

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
          <p data-testid="cart-item-name">{item.name}</p>
          {item.modifiers?.map((modifier) => (
            <p
              data-testid="cart-item-modifier"
              className="text-copy-inactive"
              key={modifier.id}
            >
              {`${modifier.name} (+${formatCurrency(modifier.price, {
                locale: companyDetails.locale,
                currency: companyDetails.ccy,
              })})`}
            </p>
          ))}
        </div>

        <Counter
          small
          value={item.amount}
          onValueChange={(value) => updateCartItemAmount(item.id, value)}
        />
      </div>

      <strong data-testid="cart-item-total">
        {formatCurrency(priceTotal, {
          locale: companyDetails.locale,
          currency: companyDetails.ccy,
        })}
      </strong>
    </div>
  );
};

export { CartItem };
