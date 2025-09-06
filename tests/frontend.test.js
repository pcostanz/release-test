// Example frontend test file for testing
// This file will trigger 'testing' label when modified

import React from "react";
import { render, screen } from "@testing-library/react";
import ExampleComponent from "../src/frontend/component";

describe("Frontend Tests", () => {
  test("ExampleComponent renders correctly", () => {
    render(<ExampleComponent />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("This is a test component")).toBeInTheDocument();
  });

  test("ExampleComponent has correct class name", () => {
    render(<ExampleComponent />);

    const component = screen.getByText("Hello World").closest("div");
    expect(component).toHaveClass("example-component");
  });
});
