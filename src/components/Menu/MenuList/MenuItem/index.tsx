import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

import { Badge } from "@/components/WhiteLabel/Badge";
import { useCart } from "@/hooks/Cart/useCart";
import { useCompany } from "@/hooks/Company/useCompany";
import { SectionItemType } from "@/hooks/Menu/useMenu";
import { arrayHasElements } from "@/utils/arrayUtils";
import { formatCurrency } from "@/utils/formatter";

import { MenuItemDialog } from "../MenuItemDialog";

interface MenuItemProps {
  sectionId: number;
  item: SectionItemType;
}

const MenuItem = ({ sectionId, item }: MenuItemProps) => {
  const { companyDetails } = useCompany();
  const { selectItem, resetSelectedItem, cartItems } = useCart();

  const getAmountSelected = (itemId: number) => {
    const items = cartItems.filter((cartItem) => cartItem.itemId === itemId);

    return items.reduce((acc, cur) => acc + cur.amount, 0);
  };

  if (!item.visible) {
    return null;
  }

  return (
    <Dialog.Root
      onOpenChange={(isOpen) =>
        isOpen ? selectItem(sectionId, item.id) : resetSelectedItem()
      }
    >
      <Dialog.Trigger
        data-testid="item-dialog-trigger"
        asChild
        disabled={!item.available}
      >
        <button
          className={clsx("flex w-full justify-between gap-10 p-4 text-left", {
            group: item.available,
            "cursor-not-allowed opacity-60": !item.available,
          })}
        >
          <section className="min-w-0">
            <div className="flex items-center gap-2">
              <Badge value={getAmountSelected(item.id)} />
              <p
                data-testid="item-name"
                className="font-medium group-hover:underline"
              >
                {item.name}
              </p>
            </div>

            <p
              data-testid="item-description"
              className="overflow-hidden text-ellipsis whitespace-nowrap font-light "
            >
              {item.description}
            </p>

            <span data-testid="item-price" className="font-medium">
              {formatCurrency(item.price, {
                locale: companyDetails.locale,
                currency: companyDetails.ccy,
              })}
            </span>
          </section>

          {arrayHasElements(item.images) && (
            <picture className="flex-shrink-0 flex-grow-0">
              <img
                data-testid="item-image"
                src={item.images![0].image}
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

export { MenuItem };
