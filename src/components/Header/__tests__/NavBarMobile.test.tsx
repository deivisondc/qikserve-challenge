import "@testing-library/jest-dom";

import { act, screen } from "@testing-library/react";

import { renderWithProviders } from "@/utils/testUtils";

import { NavBarMobile } from "../NavBarMobile";

const setup = () => {
  const { container } = renderWithProviders(<NavBarMobile />);

  const hamburgerButton = screen.getByTestId("hamburger-menu-button");

  return { container, hamburgerButton };
};

describe("<NavBarMobile />", () => {
  it("should render the selected page and the hamburger button", () => {
    const { container, hamburgerButton } = setup();

    expect(container.textContent).toContain("Menu");
    expect(hamburgerButton).toBeInTheDocument();
  });

  it("should open all navigation items when hamburger button is clicked and close when X button is clicked", () => {
    const { hamburgerButton } = setup();

    act(() => {
      hamburgerButton.click();
    });

    let navLinks = screen.queryAllByRole("link");
    const navbarCloseButton = screen.getByTestId("navbar-close-button");

    expect(navLinks).toHaveLength(3);
    expect(navbarCloseButton).toBeInTheDocument();

    act(() => {
      navbarCloseButton.click();
    });

    navLinks = screen.queryAllByRole("link");

    expect(navLinks).toHaveLength(0);
    expect(navbarCloseButton).not.toBeInTheDocument();
  });
});
