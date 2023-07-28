import "@testing-library/jest-dom";

import { act, render, screen } from "@testing-library/react";

import { Carousel } from "..";

const setup = ({ imageSrc = ["1", "2", "3"] } = {}) => {
  render(<Carousel imagesSrc={imageSrc} alt="mock-alt" />);

  const element = screen.getByTestId("carousel-image");
  const previousButton = screen.queryByTestId("previous-button");
  const nextButton = screen.queryByTestId("next-button");

  return { element, previousButton, nextButton };
};

describe("<Carousel />", () => {
  it("should render a single image without the control buttons", () => {
    const { element, previousButton, nextButton } = setup({ imageSrc: ["1"] });

    expect(element).toBeInTheDocument();
    expect(previousButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });

  it("should render control buttons when there are more than 1 image", () => {
    const { element, previousButton, nextButton } = setup();

    expect(element).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("should disabled previous button when it is the first image", () => {
    const { previousButton, nextButton } = setup();

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
  });

  it("should change image on control button clicks", async () => {
    const { element, nextButton } = setup();

    expect(element.getAttribute("src")).toBe("1");

    act(() => {
      nextButton?.click();
    });
    expect(element.getAttribute("src")).toBe("2");

    act(() => {
      nextButton?.click();
    });
    expect(element.getAttribute("src")).toBe("3");
  });

  it("should disabled next button when it is the last image", () => {
    const { element, previousButton, nextButton } = setup();

    act(() => {
      nextButton?.click();
    });

    act(() => {
      nextButton?.click();
    });

    expect(element).toBeInTheDocument();
    expect(previousButton).toBeEnabled();
    expect(nextButton).toBeDisabled();
  });
});
