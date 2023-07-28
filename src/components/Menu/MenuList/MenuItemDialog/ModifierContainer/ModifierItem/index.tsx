"use client";

import { RadioGroupItem } from "@/components/WhiteLabel/RadixUI/RadioGroupItem";
import { useCompany } from "@/hooks/Company/useCompany";
import { ModifierItem as ModifierItemType } from "@/hooks/Menu/useMenu";
import { formatCurrency } from "@/utils/formatter";

interface ModifierItemProps {
  modifierItem: ModifierItemType;
}

const ModifierItem = ({ modifierItem }: ModifierItemProps) => {
  const { companyDetails } = useCompany();

  return (
    <div
      className="flex items-center justify-between gap-4 px-6"
      key={modifierItem.id}
    >
      <label
        data-testid="dialog-modifier-item"
        className="flex w-full cursor-pointer flex-col gap-1 pb-4 pt-3.5"
        htmlFor={modifierItem.id.toString()}
      >
        <strong>{modifierItem.name}</strong>
        <span className="block">
          {formatCurrency(modifierItem.price, {
            locale: companyDetails.locale,
            currency: companyDetails.ccy,
          })}
        </span>
      </label>

      <RadioGroupItem
        id={modifierItem.id.toString()}
        value={modifierItem.id.toString()}
      />
    </div>
  );
};

export { ModifierItem };
