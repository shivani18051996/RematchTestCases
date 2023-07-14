import { counter } from "./counter";
import store from "../Store";

describe("counter reducer", () => {
  test("should have initial state with count 0", () => {
    const currentState = store.getState();
    console.log(store.getState(), "getState");
    const data = currentState.counter.count;
    expect(data).toBe(1);
  });

  test("handle Increment action", () => {
    const currentState = store.getState();
    const data = currentState.counter.count;
    expect(data).toBe(1);
    const payload = 2;
    const nextState = counter.reducers.increment(data, payload);
    expect(nextState.count).toBe(2);
  });

  test("handle decrement action", () => {
    const prevState = { count: 2 };
    // const data=store.getState().count
    const payload = 1;
    const nextState = counter.reducers.decrement(prevState, payload);
    expect(nextState.count).toBe(1);
  });
  // test("handle increment action", () => {
  //   // const prevState1 = counter.state.getState().past[0];
  //   // console.log(prevState1);
  //   const prevState = { count: 2 };
  //   const payload = 3;
  //   // const payload = 2;
  //   // const action = { type: "increment", payload: 1 };
  //   // const currentState = counter.state.count;
  //   // console.log(currentState);
  //   const nextState = counter.reducers.increment(prevState, payload);
  //   // expect(nextState.count).toBe(1);
  //   expect(nextState).toEqual({ count: 3 });
  // });
});
