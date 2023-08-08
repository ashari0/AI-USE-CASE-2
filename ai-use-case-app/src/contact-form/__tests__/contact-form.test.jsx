import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "../contact-form";
import { Provider } from "react-redux";
import store from "../../utils/store";

describe("<ContactForm />", () => {
  it("should render input fields and they should be required", () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );
    expect(screen.getByLabelText(/First Name/i)).toBeRequired();
    expect(screen.getByLabelText(/Last Name/i)).toBeRequired();
    expect(screen.getByLabelText(/Email Address/i)).toBeRequired();
    expect(screen.getByLabelText(/Write your message/i)).toBeRequired();
  });

  it("should validate the form with incorrect data", () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "invalidemail" },
    });
    fireEvent.change(screen.getByLabelText(/Write your message/i), {
      target: { value: "short" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByText("First name is required")).toBeInTheDocument();
    expect(screen.getByText("Last name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is not valid")).toBeInTheDocument();
    expect(
      screen.getByText("Message must be at least 10 characters long")
    ).toBeInTheDocument();
  });

  it("should submit the form with correct data", () => {
    window.alert = jest.fn();
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "john@example.com" },
    });

    fireEvent.change(screen.getByLabelText(/Write your message/i), {
      target: { value: "This is a valid message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(window.alert).toHaveBeenCalledWith("Record submitted successfully!");
  });
});
