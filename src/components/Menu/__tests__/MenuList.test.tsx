import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { mockMenu } from "@/mocks/MockMenu";
import { renderWithProviders } from "@/utils/testUtils";

import { MenuList } from "../MenuList";

const setup = () => {
  renderWithProviders(<MenuList />);

  const visibleSections = screen.getAllByTestId("accordion-section-item");
  const visibleItems = screen.getAllByTestId("item-dialog-trigger");

  return { visibleSections, visibleItems };
};

describe("<MenuList />", () => {
  it("should render visible sections and items only", () => {
    const { visibleSections, visibleItems } = setup();

    const sectionsToBeShown = mockMenu.sections.filter(
      (section) => section.visible,
    );
    const itemsToBeShown = sectionsToBeShown.flatMap((section) =>
      section.items.filter((item) => item.visible),
    );

    expect(visibleSections).toHaveLength(sectionsToBeShown.length);
    expect(visibleItems).toHaveLength(itemsToBeShown.length);
  });
});
