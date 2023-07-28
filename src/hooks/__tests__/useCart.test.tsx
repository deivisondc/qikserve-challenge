import "@testing-library/jest-dom";

import { ReactNode } from "react";

import { act, renderHook, screen } from "@testing-library/react";

import { mockMenu } from "@/mocks/MockMenu";

import { CartProvider, useCart } from "../Cart/useCart";
import { MenuProvider } from "../Menu/useMenu";

const section = mockMenu.sections[0];
const item = mockMenu.sections[0].items[1];

const setup = () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <MenuProvider value={mockMenu}>
      <CartProvider>{children}</CartProvider>
    </MenuProvider>
  );

  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => {
    result.current.selectItem(section.id, item.id);
  });

  return { result };
};

describe("useCart", () => {
  it("should be able to select and store an item on a state", () => {
    const { result } = setup();

    expect(result.current.selectedItem).toEqual(
      expect.objectContaining({
        id: item.id,
        name: item.name,
        price: item.price,
        requiredModifiersAmount: item.modifiers ? item.modifiers.length : 0,
        amount: 1,
      }),
    );
  });

  it("should be able to reset selected item", () => {
    const { result } = setup();

    act(() => {
      result.current.resetSelectedItem();
    });

    expect(result.current.selectedItem).toBe(undefined);
  });

  it("should be able to update the amount on the selected item", () => {
    const { result } = setup();

    act(() => {
      result.current.updateSelectedItemAmount(2);
    });

    expect(result.current.selectedItem).toEqual(
      expect.objectContaining({
        id: item.id,
        amount: 2,
      }),
    );
  });

  it("should be able to update modifiers on the selected item", () => {
    const { result } = setup();

    act(() => {
      result.current.updateSelectedItemModifier({
        id: item.modifiers![0].id,
        items: [item.modifiers![0].items[0]],
      });
    });

    expect(result.current.selectedItem).toEqual(
      expect.objectContaining({
        modifiers: [
          {
            id: item.modifiers![0].id,
            items: [item.modifiers![0].items[0]],
          },
        ],
      }),
    );
  });

  it("should be able to add selected item on cart as a new item", () => {
    const { result } = setup();

    expect(result.current.cartItems).toHaveLength(0);

    act(() => {
      result.current.addSelectedItemToCart();
    });

    expect(result.current.cartItems).toHaveLength(1);
  });

  it("should be able to add selected item amount on cart existing item", () => {
    const { result } = setup();

    expect(result.current.cartItems).toHaveLength(0);

    act(() => {
      result.current.addSelectedItemToCart();
    });

    expect(result.current.cartItems).toHaveLength(1);

    act(() => {
      result.current.addSelectedItemToCart();
    });

    expect(result.current.cartItems).toHaveLength(1);
  });

  it("should be able to update the amount on cart item", () => {
    const { result } = setup();

    act(() => {
      result.current.addSelectedItemToCart();
    });

    expect(result.current.cartItems[0].amount).toBe(1);

    act(() => {
      result.current.updateCartItemAmount(1, 5);
    });

    expect(result.current.cartItems[0].amount).toBe(5);
  });

  it("should be able to remove when updating amount to 0", () => {
    const { result } = setup();

    act(() => {
      result.current.addSelectedItemToCart();
    });
    act(() => {
      result.current.updateCartItemAmount(1, 0);
    });

    const removeDialogDescription = screen.getByTestId(
      "remove-dialog-description",
    );
    const removeDialogConfirmButton = screen.getByTestId(
      "remove-dialog-confirm-button",
    );

    expect(removeDialogDescription.textContent).toContain(
      "You are about to remove the",
    );
    expect(removeDialogConfirmButton).toBeInTheDocument();

    act(() => {
      removeDialogConfirmButton.click();
    });

    expect(result.current.cartItems).toHaveLength(0);
  });

  it("should be able to cancel item removal when updating amount to 0", () => {
    const { result } = setup();

    act(() => {
      result.current.addSelectedItemToCart();
    });
    act(() => {
      result.current.updateCartItemAmount(1, 0);
    });

    const removeDialogCancelButton = screen.getByTestId(
      "remove-dialog-cancel-button",
    );
    expect(removeDialogCancelButton).toBeInTheDocument();

    act(() => {
      removeDialogCancelButton.click();
    });

    expect(result.current.cartItems).toHaveLength(1);
  });

  it("should toggle acart modal calling function toggleCartModal", () => {
    const { result } = setup();

    expect(result.current.isCartModalOpen).toBeFalsy();

    act(() => {
      result.current.toggleCartModal();
    });

    expect(result.current.isCartModalOpen).toBeTruthy();
  });
});
