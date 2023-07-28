import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { CartProvider } from "@/hooks/Cart/useCart";
import { renderWithProviders } from "@/utils/testUtils";

import { CartModal } from "../CartModal";

describe("<CartModal />", () => {
  it("should render cart content and checkout button", () => {
    renderWithProviders(
      <CartProvider initialValue={{ isCartModalOpen: true }}>
        <CartModal />
      </CartProvider>,
    );

    const cartDescription = screen.getByText("Your basket is empty");
    const checkoutButton = screen.getByText("Checkout now");

    expect(cartDescription).toBeInTheDocument();
    expect(checkoutButton).toBeInTheDocument();
  });
});
