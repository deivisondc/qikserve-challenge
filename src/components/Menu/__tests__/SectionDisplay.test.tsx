import "@testing-library/jest-dom";

import { act, screen } from "@testing-library/react";

import { mockMenu } from "@/mocks/MockMenu";
import * as scrollUtils from "@/utils/scroll";
import { renderWithProviders } from "@/utils/testUtils";

import { SectionDisplay } from "../SectionDisplay";

const setup = () => {
  renderWithProviders(<SectionDisplay />);

  const sections = screen.getAllByTestId("section-display-button");

  return { sections };
};

describe("<SectionDisplay />", () => {
  it("should render visible sections only", () => {
    const { sections } = setup();

    const visibleSections = mockMenu.sections.filter(
      (section) => section.visible,
    );

    expect(sections).toHaveLength(visibleSections.length);
  });

  it("should scroll to section when clicked", () => {
    const spyScrollToFn = jest.spyOn(scrollUtils, "scrollTo");

    const { sections } = setup();

    act(() => {
      sections[0].click();
    });

    expect(spyScrollToFn).toHaveBeenCalled();
  });
});
