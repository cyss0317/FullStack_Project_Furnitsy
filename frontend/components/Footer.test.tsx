import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("What is Furnitsy?")).toBeInTheDocument();
    expect(
      screen.getByText("Sell furnitures to customers")
    ).toBeInTheDocument();
    expect(screen.getByText("Peace of mind")).toBeInTheDocument();
  });
});
