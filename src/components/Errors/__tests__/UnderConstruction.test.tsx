import { render, screen } from "@testing-library/react";

import { UnderConstruction } from "../UnderConstruction";

describe("<UnderConstruction />", () => {
  it("should have under construction texts", () => {
    render(<UnderConstruction />);

    const title = screen.getByText("Under construction");
    const description = screen.getByText(
      "The requested resource is not yet implemented.",
    );
    const link = screen.getByRole("link");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
