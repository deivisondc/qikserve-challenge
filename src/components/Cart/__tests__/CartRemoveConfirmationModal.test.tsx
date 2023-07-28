import "@testing-library/jest-dom";

import { act, render, screen } from "@testing-library/react";

import { CartRemoveConfirmationModal } from "../CartRemoveConfirmationModal";

const item = {
  id: 1,
  amount: 1,
  itemId: 1,
  name: "Test",
  price: 10,
  modifiers: [{ id: 1, name: "Mock", price: 15 }],
};

const setup = () => {
  const handleConfirmationModal = jest.fn();

  render(
    <CartRemoveConfirmationModal
      isModalOpen
      handleModalConfirmation={handleConfirmationModal}
      item={item}
    />,
  );

  const description = screen.getByTestId("remove-dialog-description");
  const cancelButton = screen.getByTestId("remove-dialog-cancel-button");
  const confirmationButton = screen.getByTestId("remove-dialog-confirm-button");

  return {
    description,
    cancelButton,
    confirmationButton,
    handleConfirmationModal,
  };
};

describe("<CartRemoveConfirmationModal />", () => {
  it("should render with item name", () => {
    const { description } = setup();

    expect(description.textContent).toContain(
      `${item.name} (${item.modifiers[0].name})`,
    );
  });

  it("should call handleConfirmationModal with false value when cancel button is clicked", () => {
    const { cancelButton, handleConfirmationModal } = setup();

    act(() => {
      cancelButton.click();
    });

    expect(handleConfirmationModal).toHaveBeenCalledWith(false);
  });

  it("should call handleConfirmationModal with true value when confirm button is clicked", () => {
    const { confirmationButton, handleConfirmationModal } = setup();

    act(() => {
      confirmationButton.click();
    });

    expect(handleConfirmationModal).toHaveBeenCalledWith(true);
  });
});
