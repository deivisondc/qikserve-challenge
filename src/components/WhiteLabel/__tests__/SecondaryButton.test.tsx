import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import * as companyProviderValue from "@/hooks/Company/useCompany";
import { renderWithProviders } from "@/utils/testUtils";

import { SecondaryButton } from "../SecondaryButton";

describe("<SecondaryButton />", () => {
  it("should render button after fetching company's color settings", () => {
    const spyUseCompany = jest.spyOn(companyProviderValue, "useCompany");

    renderWithProviders(<SecondaryButton>MOCK BUTTON LABEL</SecondaryButton>);

    const element = screen.getByRole("button", { name: "MOCK BUTTON LABEL" });

    expect(spyUseCompany).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});
