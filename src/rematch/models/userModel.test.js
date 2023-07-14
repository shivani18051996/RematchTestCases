import { User } from "./userModel";
import store from "../Store";

describe("UserModel Testing", () => {
  const currentState = store.getState();
  const data = currentState.User.userDetails;
  it("should have initial state with userDetails is empty object", () => {
    expect(data).toEqual({});
  });
  it("onSubmit store the data of user in the model", () => {
    const payload = {
      firstName: "Shivani",
      lastName: "Trivedi",
      email: "st@gmail.com",
      password: "admin12#",
    };
    const nextState = User.reducers.setUser(data, payload);
    expect(nextState.userDetails).toEqual({
      firstName: "Shivani",
      lastName: "Trivedi",
      email: "st@gmail.com",
      password: "admin12#",
    });
  });
});
