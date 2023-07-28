import "@testing-library/jest-dom";

import { screen, waitFor } from "@testing-library/react";

import { renderWithProviders } from "@/utils/testUtils";

import { Header } from "..";

describe("<Header />", () => {
  it("should render navbar and an image", async () => {
    renderWithProviders(<Header />);

    const navLinks = screen.getAllByRole("link");
    const image = screen.getByRole("img");

    expect(navLinks).toHaveLength(3);
    expect(image).toBeInTheDocument();
  });
});
