import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { SectionItemType } from "@/hooks/Menu/useMenu";
import { arrayHasElements } from "@/utils/arrayUtils";
import { formatCurrency } from "@/utils/formatCurrency";

import { Badge } from "../../WhiteLabel/Badge";
import { MenuItemDialog } from "./MenuItemDialog";

interface MenuListItemProps {
  sectionId: number;
  item: SectionItemType;
}

const MenuListItem = ({ sectionId, item }: MenuListItemProps) => {
  const { companyDetails } = useCompany();
  const { selectItem, resetSelectedItem, cartItems } = useCart();

  const getAmountSelected = (itemId: number) => {
    const items = cartItems.filter((cartItem) => cartItem.itemId === itemId);

    return items.reduce((acc, cur) => acc + cur.amount, 0);
  };

  return (
    <Dialog.Root
      onOpenChange={(isOpen) =>
        isOpen ? selectItem(sectionId, item.id) : resetSelectedItem()
      }
    >
      <Dialog.Trigger asChild>
        <button className="group flex justify-between gap-10 p-4 text-left">
          <section className="min-w-0">
            <div className="flex items-center gap-2">
              <Badge value={getAmountSelected(item.id)} />
              <p className="font-medium group-hover:underline">{item.name}</p>
            </div>

            <p className="overflow-hidden text-ellipsis whitespace-nowrap font-light ">
              {item.description}
            </p>

            <span className="font-medium">
              {formatCurrency(item.price, {
                locale: companyDetails.locale,
                currency: companyDetails.ccy,
              })}
            </span>
          </section>

          {arrayHasElements(item.images) && (
            <picture className="flex-shrink-0 flex-grow-0">
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
