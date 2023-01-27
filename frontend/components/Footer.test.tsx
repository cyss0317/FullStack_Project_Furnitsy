import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("What is Furnitsy?")).toBeInTheDocument();
  });
})