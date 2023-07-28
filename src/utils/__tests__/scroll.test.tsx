import { render } from "@testing-library/react";

import { scrollTo } from "../scroll";

describe("scroll", () => {
  describe("scrollTo", () => {
    it("should call element.scrollIntoView", () => {
      render(<p id="test-id">test</p>);

      const element = document.getElementById("test-id");
      if (element) {
        const mockScrollIntoView = jest.fn();
        element.scrollIntoView = mockScrollIntoView;

        scrollTo("test-id");
        expect(element.scrollIntoView).toHaveBeenCalled();
      }
    });
  });
});
