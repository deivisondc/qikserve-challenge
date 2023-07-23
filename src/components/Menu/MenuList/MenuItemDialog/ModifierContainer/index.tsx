import { ReactNode } from "react";

import * as RadioGroup from "@radix-ui/react-radio-group";

import { Modifier } from "@/hooks/Menu/useMenu";

import { ModifierItem } from "./ModifierItem";

interface ModifierContainerProps {
  modifiers?: Array<Modifier>;
}

const ModifierContainer = ({ modifiers = [] }: ModifierContainerProps) => {
  return (
    <>
      {modifiers.map((modifier) => (
        <div key={modifier.id}>
          <div className="bg-background-default px-6 py-4">
            <strong className="leading-tight">{modifier.name}</strong>
            <span className="block leading-tight">Select 1 option</span>
          </div>

          <RadioGroup.Root>
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
