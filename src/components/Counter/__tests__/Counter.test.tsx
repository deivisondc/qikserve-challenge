import "@testing-library/jest-dom";

import { act, screen } from "@testing-library/react";

import { renderWithProviders } from "@/utils/testUtils";

import { Counter } from "..";

const setup = (props?: Record<string, any>) => {
  renderWithProviders(<Counter {...props} />);

  const container = screen.getByTestId("counter-container");
  const decreaseButton = screen.getByTestId("counter-decrease-button");
  const increaseButton = screen.getByTestId("counter-increase-button");

  return { container, decreaseButton, increaseButton };
};

describe("<Counter />", () => {
  it("should render with initial value 0", () => {
    const { container } = setup();

    expect(container.textContent).toBe("0");
  });

  it("should be able to increase and decrese value", () => {
    const { container, decreaseButton, increaseButton } = setup();

    act(() => {
      increaseButton.click();
      increaseButton.click();
      decreaseButton.click();
    });

    expect(container.textContent).toBe("1");
  });

  it("should be able to render with different values", () => {
    const { container } = setup({ value: 5 });

    expect(container.textContent).toBe("5");
  });

  it("should disable buttons when it is at it's minimum or maximum value", () => {
    const { decreaseButton, increaseButton } = setup({
      minValue: 0,
      maxValue: 2,
    });

    expect(decreaseButton).toBeDisabled();
    expect(increaseButton).toBeEnabled();

    act(() => {
      increaseButton.click();
    });

    act(() => {
      increaseButton.click();
    });

    expect(decreaseButton).toBeEnabled();
    expect(increaseButton).toBeDisabled();
  });

  it("should call onValueChange when exists and value changes", () => {
    const onValueChange = jest.fn();

    const { decreaseButton, increaseButton } = setup({ onValueChange });

    act(() => {
      increaseButton.click();
    });

    expect(onValueChange).toHaveBeenCalledWith(1);

    act(() => {
      decreaseButton.click();
    });

    expect(onValueChange).toHaveBeenCalledWith(0);
  });

  it("should render small version when 'small' prop is true", () => {
    const { container, decreaseButton, increaseButton } = setup({
      small: true,
    });

    expect(container.className).toContain("gap-1");
    expect(decreaseButton.className).toContain("h-5 w-5");
    expect(increaseButton.className).toContain("h-5 w-5");
  });
});
