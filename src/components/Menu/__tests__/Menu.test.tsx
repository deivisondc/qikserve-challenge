import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { renderWithProviders } from "@/utils/testUtils";

import { Menu } from "..";

describe("<Menu />", () => {
  it("should render section display and menu list together", () => {
    renderWithProviders(<Menu />);

    const sections = screen.getAllByTestId("section-display-button");
    const items = screen.getAllByTestId("item-dialog-trigger");

    expect(sections.length).toBeGreaterThan(0);
    expect(items.length).toBeGreaterThan(0);

    expect(sections[0]).toBeInTheDocument();
    expect(items[0]).toBeInTheDocument();
  });
});
