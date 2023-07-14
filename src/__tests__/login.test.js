import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import Store from "../rematch/Store";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Login form", () => {
  // const handleSubmit = jest.fn();
  beforeEach(() => {
    render(
      <Provider store={Store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  });

  it("Element Render Successfully", () => {
    const firstNameLabel = screen.getByText("First Name");
    const lastNameLabel = screen.getByText("Last Name");
    const emailLabel = screen.getByText("Email");
    const passwordLabel = screen.getByText("Password");
    const submitBtn = screen.getByText("Submit");
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(firstNameLabel).toBeInTheDocument();
    expect(lastNameLabel).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
  it("Button OnClick -Without Form Filling", async () => {
    const button = screen.getByRole("button", {
      name: "Submit",
    });

    userEvent.click(button);
    const firstNameError = await screen.findByText("*Please enter firstName");
    const emailError = await screen.findByText("*Please enter email address");
    const lastNameError = await screen.findByText("*Please enter lastName");
    const passwordError = await screen.findByText("*Please enter password");
    expect(firstNameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(lastNameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
  it("Button OnClick - but data is inCorrect", async () => {
    const inputFN = screen.getByTestId("firstName-input");
    fireEvent.change(inputFN, {
      target: { value: "j" },
    });
    const inputLN = screen.getByTestId("lastName-input");
    fireEvent.change(inputLN, {
      target: { value: "j" },
    });
    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, {
      target: { value: "john" },
    });
    const inputPW = screen.getByTestId("password-input");
    fireEvent.change(inputPW, {
      target: { value: "admin12#" },
    });
    const button = screen.getByRole("button", {
      name: /submit/i,
    });
    userEvent.click(button);
    const EmailErrorValid = await screen.findByText(
      "*Please enter a valid email address"
    );
    const firstNameError = await screen.findAllByText(
      "*Min character should be 2"
    );
    const passwordError = screen.queryByText("*Please enter password");
    expect(passwordError).not.toBeInTheDocument();
    expect(firstNameError).toHaveLength(2);
    expect(EmailErrorValid).toBeInTheDocument();
  });
  it("Fill All Information - On Submit Expect Clear Form and value is store in values", async () => {
    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, {
      target: { value: "john@gmail.com" },
    });
    const inputFN = screen.getByTestId("firstName-input");
    fireEvent.change(inputFN, {
      target: { value: "john" },
    });
    const inputLN = screen.getByTestId("lastName-input");
    fireEvent.change(inputLN, {
      target: { value: "silk" },
    });
    const inputPW = screen.getByTestId("password-input");
    fireEvent.change(inputPW, {
      target: { value: "admin12#" },
    });
    const button = screen.getByRole("button", {
      name: /submit/i,
    });

    userEvent.click(button);
    await waitFor(() => {
      expect(window.location.pathname).toBe("/task");
    });
  });
  // it("check then value is store in formik values", () => {
  //   const inputEl = screen.getByTestId("email-input");
  //   fireEvent.change(inputEl, {
  //     target: { value: "john@gmail.com" },
  //   });
  //   const inputFN = screen.getByTestId("firstName-input");
  //   fireEvent.change(inputFN, {
  //     target: { value: "john" },
  //   });
  //   const inputLN = screen.getByTestId("lastName-input");
  //   fireEvent.change(inputLN, {
  //     target: { value: "silk" },
  //   });
  //   const inputPW = screen.getByTestId("password-input");
  //   fireEvent.change(inputPW, {
  //     target: { value: "admin12#" },
  //   });
  //   const button = screen.getByRole("button", {
  //     name: /submit/i,
  //   });

  //   userEvent.click(button);

  //   // expect(formik.values.firstName).toBe("John");
  //   // expect(formik.values.email).toBe('john.doe@example.com');
  //   // expect(formik.values.password).toBe('admin12#');
  // });
});
