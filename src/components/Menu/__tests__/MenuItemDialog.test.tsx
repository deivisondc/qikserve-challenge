import "@testing-library/jest-dom";

import * as Dialog from "@radix-ui/react-dialog";
import { act, screen } from "@testing-library/react";

import { CartProvider, useCart } from "@/hooks/Cart/useCart";
import { SectionItemType } from "@/hooks/Menu/useMenu";
import { mockMenu } from "@/mocks/MockMenu";
import { renderWithProviders } from "@/utils/testUtils";

import { MenuItemDialog } from "../MenuList/MenuItemDialog";

const itemWithoutModifier = mockMenu.sections[0].items[0];
const itemWithModifier = mockMenu.sections[0].items[1];

const setup = ({ item }: { item: SectionItemType }) => {
  renderWithProviders(
    <CartProvider
      initialValue={{
        selectedItem: {
          ...item,
          requiredModifiersAmount: 1,
          amount: 1,
          modifiers: [],
        },
      }}
    >
      <Dialog.Root>
        <Dialog.Trigger data-testid="trigger">Dialog Trigger</Dialog.Trigger>

        <MenuItemDialog item={item} />
      </Dialog.Root>
      ,
    </CartProvider>,
  );

  const trigger = screen.getByTestId("trigger");

  act(() => {
    trigger.click();
  });

  const closeButton = screen.getByTestId("dialog-close-button");
  const carousel = screen.getByTestId("carousel-image");
  const title = screen.getByTestId("dialog-title");
  const description = screen.getByTestId("dialog-description");
  const modifierItems = screen.queryAllByTestId("dialog-modifier-item");
  const submitButton = screen.getByTestId("primary-button");

  return {
    closeButton,
    carousel,
    title,
    description,
    modifierItems,
    submitButton,
  };
};

describe("<MenuItemDialog>", () => {
  it("should display item information when there are no modifiers", () => {
    const {
      closeButton,
      carousel,
      title,
      description,
      modifierItems,
      submitButton,
    } = setup({ item: itemWithoutModifier });

    expect(closeButton).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(modifierItems).toHaveLength(0);
    expect(submitButton).toBeInTheDocument();
  });

  it("should display item information when there are modifiers", () => {
    const {
      closeButton,
      carousel,
      title,
      description,
      modifierItems,
      submitButton,
    } = setup({ item: itemWithModifier });

    expect(closeButton).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(modifierItems.length).toBeGreaterThan(0);
    expect(submitButton).toBeInTheDocument();
  });

  it("should close dialog when close button is clicked", () => {
    const {
      closeButton,
      carousel,
      title,
      description,
      modifierItems,
      submitButton,
    } = setup({ item: itemWithoutModifier });

    act(() => {
      closeButton.click();
    });

    expect(closeButton).not.toBeInTheDocument();
    expect(carousel).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
    expect(description).not.toBeInTheDocument();
    expect(modifierItems).toHaveLength(0);
    expect(submitButton).not.toBeInTheDocument();
  });

  it("should enable submit button when modifier is selected", () => {
    const { modifierItems, submitButton } = setup({ item: itemWithModifier });

    const increaseButton = screen.getByTestId("counter-increase-button");

    expect(submitButton).toBeDisabled();

    act(() => {
      modifierItems[0].click();
    });

    expect(submitButton).toBeEnabled();

    act(() => {
      increaseButton.click();
    });

    act(() => {
      submitButton.click();
    });

    expect(submitButton).not.toBeVisible;
  });
});
