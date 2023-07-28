import "@testing-library/jest-dom";

import { act, screen } from "@testing-library/react";

import { mockMenu } from "@/mocks/MockMenu";
import { renderWithProviders } from "@/utils/testUtils";

import { SectionDisplayItem } from "../SectionDisplay/SectionDisplayItem";

const section = mockMenu.sections[0];

const setup = (props: any) => {
  renderWithProviders(<SectionDisplayItem {...props} />);

  const button = screen.getByTestId("section-display-button");
  const image = screen.getByRole("img");

  return { button, image };
};

describe("<SectionDisplayItem />", () => {
  it("should render section image and name", () => {
    const { button, image } = setup({
      section: section,
      isActive: false,
      onClick: jest.fn(),
    });

    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it("should call onClick function when clicked", () => {
    const mockOnClickFn = jest.fn();
    const { button, image } = setup({
      section: section,
      isActive: false,
      onClick: mockOnClickFn,
    });

    act(() => {
      button.click();
    });

    expect(mockOnClickFn).toHaveBeenCalled();
  });

  it("should have different style when active", () => {
    const { button } = setup({
      section: section,
      isActive: true,
      onClick: jest.fn(),
    });

    expect(button.className).toContain("border-copy-main");
    expect(button.className).not.toContain("border-transparent");
  });
});
