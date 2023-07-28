import { screen } from "@testing-library/react";

import { mockMenu } from "@/mocks/MockMenu";
import { renderWithProviders } from "@/utils/testUtils";

import { SectionDisplay } from "../SectionDisplay";

describe("<SectionDisplay />", () => {
  it("should render visible sections only", () => {
    renderWithProviders(<SectionDisplay />);

    const visibleSections = mockMenu.sections.filter(
      (section) => section.visible,
    );
    const sections = screen.getAllByTestId("section-display-button");

    expect(sections).toHaveLength(visibleSections.length);
  });
});
