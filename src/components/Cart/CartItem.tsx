import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatCurrency";

import { Counter } from "../Counter";

interface CartItemProps {}

const CartItem = ({}: CartItemProps) => {
  const { companyDetails } = useCompany();

  return (
    <div className="flex justify-between p-4">
      <div className="flex flex-col gap-2">
        <span>Caipirinha</span>
        <Counter small />
      </div>

      <strong>
        {formatCurrency(13, {
          locale: companyDetails.locale,
          currency: companyDetails.ccy,
        })}
      </strong>
    </div>
  );
};

export { CartItem };
