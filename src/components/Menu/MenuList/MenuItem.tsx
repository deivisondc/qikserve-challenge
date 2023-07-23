import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { useCompany } from "@/hooks/Company/useCompany";
import { SectionItemType } from "@/hooks/Menu/useMenu";
import { arrayHasElements } from "@/utils/arrayUtils";
import { formatCurrency } from "@/utils/formatCurrency";

import { Badge } from "../../WhiteLabel/Badge";
import { MenuItemDialog } from "./MenuItemDialog";

interface MenuListItemProps {
  item: SectionItemType;
}

const MenuListItem = ({ item }: MenuListItemProps) => {
  const [amountSelected, setAmountSelected] = useState(2);

  const { companyDetails } = useCompany();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="group flex gap-4 p-4 text-left">
          <section className="flex-1">
            <div className="flex items-center gap-2">
              {amountSelected > 0 && <Badge>{amountSelected}</Badge>}
              <p className="font-medium group-hover:underline">{item.name}</p>
            </div>

            <p className="font-light">{item.description}</p>

            <span className="font-medium">
              {formatCurrency(item.price, {
                locale: companyDetails.locale,
                currency: companyDetails.ccy,
              })}
            </span>
          </section>

          {arrayHasElements(item.images) && (
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
        </button>
      </Dialog.Trigger>

      <MenuItemDialog item={item} />
    </Dialog.Root>
  );
};

export { MenuListItem };
