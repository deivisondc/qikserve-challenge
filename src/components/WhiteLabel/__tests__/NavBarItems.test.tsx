import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { ROUTES } from "@/constants/routes";
import * as companyProviderValue from "@/hooks/Company/useCompany";
import { renderWithProviders } from "@/utils/testUtils";

import { NavBarItems } from "../NavBar/NavBarItems";

const setup = ({ containerClasses = "" } = {}) => {
  renderWithProviders(<NavBarItems containerClasses={containerClasses} />);

  const container = screen.getByTestId("navbar-items-container");

  return { container };
};

describe("<NavBarItems />", () => {
  it("should render items after fetching company's color settings", () => {
    const spyUseCompany = jest.spyOn(companyProviderValue, "useCompany");

    const { container } = setup();

    expect(spyUseCompany).toHaveBeenCalled();
    expect(container).toBeInTheDocument();
  });

  it("should render with custom container classes", () => {
    const { container } = setup({ containerClasses: "mock-class" });

    expect(container.className).toContain("mock-class");
  });

  test.each(Object.entries(ROUTES))(
    "should render link to %s",
    (linkTo, label) => {
      setup();

      const menuItem = screen.getByRole("link", { name: label });

      expect(menuItem.getAttribute("href")).toBe(linkTo);
    },
  );
});
