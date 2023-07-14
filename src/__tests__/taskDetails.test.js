import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../rematch/Store";
import { MemoryRouter, Route, Routes } from "react-router";
import TaskDetail from "../components/TaskDetail";
import userEvent from "@testing-library/user-event";


jest.mock("react-router", () => {
  return {
    ...jest.requireActual("react-router"),
    useLocation: () => {
      return {
        pathname: "/task",
        search: "",
        hash: "",
        state: { id: 1683025108847, title: "st" },
        key: "default",
      };
    },
  };
});

describe("test", () => {
  beforeEach(() => {
    render(
      <Provider store={Store}>
        <MemoryRouter initialEntries={[`/task:id`]}>
          <Routes>
            <Route path="/task:id" element={<TaskDetail />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });
  it("Rendering the taskDetails components and testing the details", async () => {
    const value = screen.getByText("Title: st");
    expect(value).toBeInTheDocument();
    const backButton = screen.getByRole("button", { name: "Back" });
    expect(backButton).toBeInTheDocument();
    userEvent.click(backButton);
    expect(window.location.pathname).toBe("/");
  });
});
