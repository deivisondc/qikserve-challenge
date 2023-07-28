import "@testing-library/jest-dom";

import { act, screen } from "@testing-library/react";

import { mockMenu } from "@/mocks/MockMenu";
import { renderWithProviders } from "@/utils/testUtils";

import { MenuItem } from "../MenuList/MenuItem";

const mockItem = mockMenu.sections[0].items[0];

const setup = ({ item = mockItem } = {}) => {
  const { container } = renderWithProviders(
    <MenuItem item={item} sectionId={1} />,
  );

  const itemTrigger = screen.getByTestId("item-dialog-trigger");
  const itemName = screen.getByTestId("item-name");
  const itemDescription = screen.queryByTestId("item-description");
  const itemPrice = screen.getByTestId("item-price");
  const itemImage = screen.queryByTestId("item-image");

  return {
    container,
    itemTrigger,
    itemName,
    itemDescription,
    itemPrice,
    itemImage,
  };
};

describe("<MenuItem />", () => {
  it("should render an item with name, description, price and image", () => {
    const item = {
      ...mockItem,
      id: 1,
      name: "MOCK ITEM TEST",
      price: 12,
      visible: 1,
      available: true,
      position: 0,
    };

    const { itemName, itemDescription, itemPrice, itemImage } = setup({ item });

    expect(itemName).toBeInTheDocument();
    expect(itemDescription).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
    expect(itemImage).toBeInTheDocument();
  });

  it("should not show if the item has property 'visible' a falsy value", () => {
    const item = {
      ...mockItem,
      visible: 0,
    };

    renderWithProviders(<MenuItem item={item} sectionId={1} />);

    const triggerContainer = screen.queryByTestId("item-dialog-trigger");
    expect(triggerContainer).toBeFalsy();
  });

  it("should not be clickable if item has property 'available' a falsy value", () => {
    const item = {
      ...mockItem,
      available: false,
    };

    const { itemName, itemTrigger } = setup({ item });
    expect(itemName).toBeInTheDocument();
    expect(itemTrigger).toBeDisabled();
  });

  it("should open MenuItemDialog when clicked", () => {
    const { itemTrigger } = setup();

    act(() => {
      itemTrigger.click();
    });

    const dialog = screen.getByTestId("item-dialog");

    expect(dialog).toBeInTheDocument();
  });

  it("should render a badge before the item name with the amount on cart", async () => {
    const { itemTrigger } = setup();

    act(() => {
      itemTrigger.click();
    });

    const dialog = screen.getByTestId("item-dialog");
    const addToCartButton = screen.getByTestId("primary-button");

    act(() => {
      addToCartButton.click();
    });

    const badge = screen.getByTestId("badge");

    expect(dialog).not.toBeInTheDocument();
    expect(badge).toBeInTheDocument();
    expect(badge?.textContent).toBe("1");
  });
});
