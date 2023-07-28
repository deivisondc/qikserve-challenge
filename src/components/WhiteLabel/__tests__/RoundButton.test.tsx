import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { Plus } from "@/components/Icons/Plus";
import * as companyProviderValue from "@/hooks/Company/useCompany";
import { renderWithProviders } from "@/utils/testUtils";

import { RoundButton } from "../RoundButton";

const setup = (customAttributes?: Record<string, any>) => {
  renderWithProviders(<RoundButton icon={Plus} {...customAttributes} />);

  const element = screen.getByTestId("round-button");

  return { element };
};

describe("<RoundButton />", () => {
  it("should render button after fetching company's color settings", () => {
    const spyUseCompany = jest.spyOn(companyProviderValue, "useCompany");

    const { element } = setup();

    expect(spyUseCompany).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });

  it('should render button smaller if prop "small" is true', () => {
    const { element } = setup({ small: true });

    expect(element.className).toContain("h-5");
    expect(element.className).toContain("w-5");
  });

  it('should render button disable if "disabled" is true', () => {
    const { element } = setup({ disabled: true });

    expect(element).toBeDisabled();
    expect(element.className).toContain("bg-background-inactive");
  });
});
