import { useState } from "react";

import { useCompany } from "@/hooks/Company/useCompany";
import { SectionItemType } from "@/hooks/Menu/useMenu";
import { formatCurrency } from "@/utils/formatCurrency";

import { Badge } from "../../WhiteLabel/Badge";

interface MenuListItemProps {
  item: SectionItemType;
}

const MenuListItem = ({ item }: MenuListItemProps) => {
  const [amountSelected, setAmountSelected] = useState(2);

  const { companyDetails } = useCompany();

  return (
    <div className="flex gap-4 p-4" key={item.id}>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          {amountSelected > 0 && <Badge>{amountSelected}</Badge>}
          <p className="font-medium">{item.name}</p>
        </div>

        <p className="font-light">{item.description}</p>

        <span className="font-medium">
          {formatCurrency(item.price, {
            locale: companyDetails.locale,
            currency: companyDetails.ccy,
          })}
        </span>
      </div>

      {item.images && (
        <picture>
          <img
            src={item.images[0].image}
            width={128}
            height={85}
            alt={item.description}
            className="overflow-hidden rounded-md object-cover"
          />
        </picture>
      )}
    </div>
  );
};

export { MenuListItem };
