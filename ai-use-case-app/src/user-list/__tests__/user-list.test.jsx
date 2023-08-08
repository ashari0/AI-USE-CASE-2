import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import UserList from "../user-list";
import { Provider } from "react-redux";
import store from "../../utils/store";

describe("<UserList />", () => {
  it("should render user information", () => {
    store.dispatch({
      type: "SET_USER_INFO",
      payload: {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        message: "This is a test message",
      },
    });
    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("This is a test message")).toBeInTheDocument();
  });
});
