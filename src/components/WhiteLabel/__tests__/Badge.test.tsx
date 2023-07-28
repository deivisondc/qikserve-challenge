import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import * as companyProviderValue from "@/hooks/Company/useCompany";
import { renderWithProviders } from "@/utils/testUtils";

import { Badge } from "../Badge";

describe("<Badge />", () => {
  it("should render badge after fetching company's color settings", () => {
    const spyUseCompany = jest.spyOn(companyProviderValue, "useCompany");

    renderWithProviders(<Badge value={1} />);

    const element = screen.getByTestId("badge");

    expect(spyUseCompany).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });

  it("should not render if badge value is falsy", () => {
    renderWithProviders(<Badge value={0} />);

    const element = screen.queryByTestId("badge");

    expect(element).toBeFalsy();
  });
});
