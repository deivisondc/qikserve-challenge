import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import * as companyProviderValue from "@/hooks/Company/useCompany";
import { renderWithProviders } from "@/utils/testUtils";

import { PrimaryButton } from "../PrimaryButton";

const setup = ({
  children,
  ...customAttributes
}: {
  children: any;
  [key: string]: any;
}) => {
  renderWithProviders(
    <PrimaryButton {...customAttributes}>{children}</PrimaryButton>,
  );

  const element = screen.getByTestId("primary-button");

  return { element };
};

describe("<PrimaryButton />", () => {
  it("should render button after fetching company's color settings", () => {
    const spyUseCompany = jest.spyOn(companyProviderValue, "useCompany");

    const { element } = setup({ children: "MOCK BUTTON" });

    expect(spyUseCompany).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });

  it('should render button disable if "disabled" is true', () => {
    const { element } = setup({ children: "MOCK BUTTON", disabled: true });

    expect(element).toBeDisabled();
    expect(element.className).toContain("bg-background-inactive");
  });
});
