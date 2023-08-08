import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("should toggle between ContactForm and UserList", () => {
  render(<App />);

  expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  expect(screen.queryByTestId("user-list")).toBeNull();

  fireEvent.click(screen.getByText("Show User List"));

  expect(screen.getByTestId("user-list")).toBeInTheDocument();
  expect(screen.queryByTestId("contact-form")).toBeNull();

  fireEvent.click(screen.getByText("Back to Form"));

  expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  expect(screen.queryByTestId("user-list")).toBeNull();
});
