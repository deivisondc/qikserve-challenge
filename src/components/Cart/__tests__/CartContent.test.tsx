import { screen } from "@testing-library/react";

import { CartProvider, ICartItem } from "@/hooks/Cart/useCart";
import { renderWithProviders } from "@/utils/testUtils";

import { CartContent } from "../CartContent";

const cartItems: ICartItem[] = [
  { id: 1, amount: 1, itemId: 1, name: "Test 1", price: 10 },
  { id: 2, amount: 2, itemId: 2, name: "Test 2", price: 20 },
];

describe("<CartContent />", () => {
  it("should render all cart items and the total price", () => {
    renderWithProviders(
      <CartProvider initialValue={{ cartItems }}>
        <CartContent />
      </CartProvider>,
    );

    const cartItemsNames = screen.getAllByTestId("cart-item-name");
    const cartTotalPrice = screen.getByTestId("cart-total-price");

    expect(cartItemsNames).toHaveLength(2);
    expect(cartTotalPrice.textContent).toBe("R$\xa050,00");
  });
});
