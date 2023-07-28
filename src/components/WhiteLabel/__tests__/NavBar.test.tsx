import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import * as companyProviderValue from "@/hooks/Company/useCompany";
import { renderWithProviders } from "@/utils/testUtils";

import { NavBar } from "../NavBar";

describe("<NavBar />", () => {
  it("should render navbar after fetching company's color settings", () => {
    const spyUseCompany = jest.spyOn(companyProviderValue, "useCompany");

    renderWithProviders(<NavBar>MOCK NAV BAR</NavBar>);

    const element = screen.getByTestId("navbar-container");

    expect(spyUseCompany).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});
