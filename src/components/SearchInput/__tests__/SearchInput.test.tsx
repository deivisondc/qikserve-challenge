import "@testing-library/jest-dom";

import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "@/utils/testUtils";

import { SearchInput } from "..";

const setup = () => {
  renderWithProviders(<SearchInput />);

  const element = screen.getByRole<HTMLInputElement>("textbox");

  return { element };
};

describe("<SearchInput />", () => {
  it("should render with an icon", () => {
    const { element } = setup();
    const svg = screen.getByTestId("search-icon");

    expect(element).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  it("should respect useMenu's filter state", async () => {
    const { element } = setup();

    fireEvent.change(element, { target: { value: "test" } });

    expect(element.value).toBe("test");
  });
});
