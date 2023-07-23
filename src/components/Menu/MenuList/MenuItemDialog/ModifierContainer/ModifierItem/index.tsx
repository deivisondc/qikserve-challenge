"use client";

import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

import { useCompany } from "@/hooks/Company/useCompany";
import { ModifierItem } from "@/hooks/Menu/useMenu";
import { formatCurrency } from "@/utils/formatCurrency";

interface ModifierItemProps {
  modifierItem: ModifierItem;
}

const ModifierItem = ({ modifierItem }: ModifierItemProps) => {
  const { companyDetails } = useCompany();

  return (
    <div
      className="flex items-center justify-between px-6"
      key={modifierItem.id}
    >
      <div className="flex flex-col gap-1 pb-4 pt-3.5">
        <strong>{modifierItem.name}</strong>
        <span className="block">
          {formatCurrency(modifierItem.price, {
            locale: companyDetails.locale,
            currency: companyDetails.ccy,
          })}
        </span>
      </div>

      <RadioGroupItem value={modifierItem.id.toString()} />
    </div>
  );
};

export { ModifierItem };
