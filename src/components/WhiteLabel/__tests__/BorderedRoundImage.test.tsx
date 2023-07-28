import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import * as companyProviderValue from "@/hooks/Company/useCompany";
import { renderWithProviders } from "@/utils/testUtils";

import { BorderedRoundImage } from "../BorderedRoundImage";

const imgSource =
  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";

const setup = (customAttributes?: any) => {
  renderWithProviders(
    <BorderedRoundImage src={imgSource} {...customAttributes} />,
  );

  const element = screen.getByRole("img");

  return { element };
};

describe("<BorderedRoundImage />", () => {
  it("should render an image rounded with borders after fetching company's color settings", () => {
    const spyUseCompany = jest.spyOn(companyProviderValue, "useCompany");

    const { element } = setup();

    expect(spyUseCompany).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });

  it("should render an image rounded with borders with custom attributes", () => {
    const { element } = setup({ width: "900px", height: "500px" });

    expect(element.getAttribute("width")).toBe("900px");
    expect(element.getAttribute("height")).toBe("500px");
  });
});
