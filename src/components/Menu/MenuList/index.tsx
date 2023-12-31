"use client";

import * as Accordion from "@radix-ui/react-accordion";

import { ChevronDown } from "@/components/Icons/ChevronDown";
import { useMenu } from "@/hooks/Menu/useMenu";

import { MenuItem } from "./MenuItem";

const MenuList = () => {
  const { menu, filteredMenu } = useMenu();

  const accordionDefaultValue = menu.sections.map((section) =>
    section.id.toString(),
  );

  return (
    <Accordion.Root type="multiple" defaultValue={accordionDefaultValue}>
      {filteredMenu.sections.map((section) =>
        section.visible ? (
          <Accordion.Item
            id={section.id.toString()}
            data-testid="accordion-section-item"
            value={section.id.toString()}
            className="accordion"
            key={section.id}
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between p-4 pt-5 text-2xl font-medium hover:underline">
                {section.name}
                <ChevronDown />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              {section.items.map((item) => (
                <MenuItem key={item.id} sectionId={section.id} item={item} />
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ) : null,
      )}
    </Accordion.Root>
  );
};

export { MenuList };
