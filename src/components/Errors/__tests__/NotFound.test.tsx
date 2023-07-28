import { render, screen } from "@testing-library/react";

import { NotFound } from "../NotFound";

describe("<NotFound />", () => {
  it("should have under construction texts", () => {
    render(<NotFound />);

    const title = screen.getByText("Not Found");
    const description = screen.getByText("Could not find requested resource");
    const link = screen.getByRole("link");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
