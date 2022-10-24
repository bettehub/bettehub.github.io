import React from "react";
import { render, screen } from "@testing-library/react";
import PageLayout from "./components/templates/PageLayout";

test("renders learn react link", () => {
  render(<PageLayout />);
});
