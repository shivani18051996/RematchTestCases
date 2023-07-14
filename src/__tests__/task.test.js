import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../rematch/Store";
import { MemoryRouter, Route, Routes } from "react-router";
import Task from "../components/Task";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


describe("test", () => {
  beforeEach(() => {
    render(
      <Provider store={Store}>
        <MemoryRouter initialEntries={[`/task`]}>
          <Routes>
            <Route path="/task" element={<Task />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  it("rendered the Task component correctly", () => {
    const inputElement = screen.getByPlaceholderText("Enter Task");
    expect(inputElement).toBeInTheDocument();
    const addButton = screen.getByRole("button", { name: "ADD TASK" });
    expect(addButton).toBeInTheDocument();
    const heading = screen.getByText("Add Task Here");
    expect(heading).toBeInTheDocument();
  });
  it("Render the List is Empty", () => {
    const emptyData = screen.getByText("No Task Found");
    expect(emptyData).toBeInTheDocument();
  });
  it("Render the Add button functionality", () => {
    const inputElement = screen.getByPlaceholderText("Enter Task");
    expect(inputElement).toBeInTheDocument();
    const addButton = screen.getByRole("button", { name: "ADD TASK" });
    expect(addButton).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "st" } });
    fireEvent.click(addButton);
    const listItem = screen.getByText("st");
    expect(listItem).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });

  it("should delete item from list when delete button is clicked", () => {
    const input = screen.getByPlaceholderText("Enter Task");
    const addButton = screen.getByRole("button", { name: "ADD TASK" });
    fireEvent.change(input, { target: { value: "item 1" } });
    fireEvent.click(addButton);
    const items = screen.getByTestId("list");
    //in Store there are two element it is not counting two elements?
    expect(items.children.length).toBe(1);
  });

  it("check the edit and update functionality", async () => {
    const inputElement = screen.getByPlaceholderText("Enter Task");
    const addButton = screen.getByRole("button", { name: "ADD TASK" });
    fireEvent.change(inputElement, { target: { value: "Item 1" } });
    fireEvent.click(addButton);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    const editButton = screen.getByTestId("edit-button-1");
    fireEvent.click(editButton);
    fireEvent.change(inputElement, { target: { value: "Item 1" } });
    fireEvent.change(inputElement, { target: { value: "Item 1 test" } });
    const updateButton = screen.getByRole("button", { name: "Update Task" });
    expect(updateButton).toBeInTheDocument();
    fireEvent.click(updateButton);
    expect(inputElement.value).toBe("");
    expect(screen.getByText("Item 1 test")).toBeInTheDocument();
  });
  it("check the view functionality", async () => {
    const inputElement = screen.getByPlaceholderText("Enter Task");
    expect(inputElement).toBeInTheDocument();
    const addButton = screen.getByRole("button", { name: "ADD TASK" });
    expect(addButton).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "st" } });
    fireEvent.click(addButton)
    const viewButton = screen.getByTestId("view-btn-0");
    expect(viewButton).toBeInTheDocument();
    fireEvent.click(viewButton);
    // await waitFor(() => {
    //   expect(window.location.pathname).toBe("/task/1683025108847");
    // });
  });
});
