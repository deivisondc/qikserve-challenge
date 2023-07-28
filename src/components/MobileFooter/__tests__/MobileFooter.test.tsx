import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import * as cartProviderValue from "@/hooks/Cart/useCart";
import { mockMenu } from "@/mocks/MockMenu";
import { renderWithProviders } from "@/utils/testUtils";

import { MobileFooter } from "..";

const setup = ({ cartItems }: { cartItems: cartProviderValue.ICartItem[] }) => {
  const spyToggleCartModal = jest.fn();

  jest.spyOn(cartProviderValue, "useCart").mockImplementation(() => {
    return {
      cartItems,
      selectItem: jest.fn(),
      resetSelectedItem: jest.fn(),
      updateSelectedItemAmount: jest.fn(),
      updateSelectedItemModifier: jest.fn(),
      addSelectedItemToCart: jest.fn(),
      updateCartItemAmount: jest.fn(),
      cartTotalPrice: 0,
      isCartModalOpen: false,
      toggleCartModal: spyToggleCartModal,
    };
  });

  renderWithProviders(<MobileFooter />);

  const allergyButton = screen.getByTestId("allergy-button");
  const basketButton = screen.queryByTestId("basket-button");

  return { allergyButton, basketButton, spyToggleCartModal };
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe("<MobileFooter />", () => {
  it("should render just the allergy button if there are no item on cart", () => {
    const { allergyButton, basketButton } = setup({ cartItems: [] });

    expect(allergyButton).toBeInTheDocument();
    expect(basketButton).not.toBeInTheDocument();
  });

  it("should render both buttons when there is at least one item on the cart", () => {
    const { allergyButton, basketButton } = setup({
      cartItems: [{ id: 1, amount: 1, itemId: 1, name: "test 1", price: 23 }],
    });

    expect(allergyButton).toBeInTheDocument();
    expect(basketButton).toBeInTheDocument();
    expect(basketButton?.textContent).toBe("Your basket - 1 item");
  });

  it("should render basket button label on plural when there are more than 1 item", () => {
    const { allergyButton, basketButton } = setup({
      cartItems: [
        { id: 1, amount: 3, itemId: 1, name: "test 1", price: 23 },
        { id: 2, amount: 1, itemId: 2, name: "test 2", price: 13 },
      ],
    });

    expect(allergyButton).toBeInTheDocument();
    expect(basketButton).toBeInTheDocument();
    expect(basketButton?.textContent).toBe("Your basket - 4 items");
  });

  it("should call toggleCartModal on basket button click", () => {
    const { basketButton, spyToggleCartModal } = setup({
      cartItems: [{ id: 1, amount: 1, itemId: 1, name: "test 1", price: 23 }],
    });

    basketButton?.click();
    expect(spyToggleCartModal).toHaveBeenCalled();
  });
});
