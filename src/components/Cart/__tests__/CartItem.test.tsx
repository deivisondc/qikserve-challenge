import { screen } from "@testing-library/react";

import { ICartItem } from "@/hooks/Cart/useCart";
import { renderWithProviders } from "@/utils/testUtils";

import { CartItem } from "../CartItem";

const item: ICartItem = {
  id: 1,
  itemId: 1,
  amount: 1,
  name: "Test Name",
  price: 12,
  modifiers: [{ id: 1, name: "Mod 1", price: 10 }],
};

const setup = () => {
  renderWithProviders(<CartItem item={item} />);

  const itemName = screen.getByTestId("cart-item-name");
  const itemModifier = screen.getByTestId("cart-item-modifier");
  const itemTotal = screen.getByTestId("cart-item-total");

  return { itemName, itemModifier, itemTotal };
};

describe("<CartItem />", () => {
  it("should render item name, modifiers and prices", () => {
    const { itemName, itemModifier, itemTotal } = setup();

    expect(itemName.textContent).toBe("Test Name");
    expect(itemModifier.textContent).toBe("Mod 1 (+R$\xa010,00)");
    expect(itemTotal.textContent).toBe("R$\xa022,00");
  });
});
