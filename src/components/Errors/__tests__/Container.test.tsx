import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Container } from "../Container";

describe("Container", () => {
  it("renders a heading", () => {
    render(<Container>TEST CHILDREN</Container>);

    const heading = screen.getByText(/test children/i);

    expect(heading).toBeInTheDocument();
  });
});
