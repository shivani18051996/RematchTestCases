import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Counter from "../components/Counter";
import store from "../rematch/Store";

describe("Counter component", () => {

  test("should render initial count value", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const countElement = screen.getByTestId("counter-value");
    expect(countElement.textContent).toBe(`Counter: 1`);
  });

  test("should increment count when increment button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    const countElement = screen.getByTestId("counter-value");
    expect(countElement.textContent).toBe("Counter: 2");
  });

  test("should decrement count when decrement button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const countElement = screen.getByTestId("counter-value");
    expect(countElement.textContent).toBe("Counter: 1");
    // fireEvent.click(decrementButton);
    // expect(countElement.textContent).toBe("Counter: -1");
  });

});
