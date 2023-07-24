import { ReactNode } from "react";

import * as RadioGroup from "@radix-ui/react-radio-group";

import { ModifierSelection, useCart } from "@/hooks/Cart/useCart";
import {
  Modifier,
  ModifierItem as ModifierItemType,
} from "@/hooks/Menu/useMenu";

import { ModifierItem } from "./ModifierItem";

interface ModifierContainerProps {
  modifiers?: Array<Modifier>;
}

const ModifierContainer = ({ modifiers = [] }: ModifierContainerProps) => {
  const { updateSelectedItemModifier } = useCart();

  const handleModifierItemChange = (
    modifierId: number,
    modifierItems: Array<ModifierItemType>,
    modifierItemId: number,
  ) => {
    const modifierItem = modifierItems.find(
      (item) => item.id === modifierItemId,
    );

    if (modifierItem) {
      const modifierSelection: ModifierSelection = {
        id: modifierId,
        items: [
          {
            id: modifierItem.id,
            name: modifierItem.name,
            price: modifierItem.price,
          },
        ],
      };

      updateSelectedItemModifier(modifierSelection);
    }
  };

  return (
    <>
      {modifiers.map((modifier) => (
        <div key={modifier.id}>
          <div className="bg-background-default px-6 py-4">
            <strong className="leading-tight">{modifier.name}</strong>
            <span className="block leading-tight">Select 1 option</span>
          </div>

          <RadioGroup.Root
            onValueChange={(value) =>
              handleModifierItemChange(
                modifier.id,
                modifier.items,
                Number(value),
              )
            }
          >
            <div className="flex flex-col bg-white">
              {modifier.items.map((modifierItem) => (
                <ModifierItem
                  modifierItem={modifierItem}
                  key={modifierItem.id}
                />
              ))}
            </div>
          </RadioGroup.Root>
        </div>
      ))}
    </>
  );
};

export { ModifierContainer };
