import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch.counter.increment(counter.count + 1);
  };

  const decrement = () => {
    dispatch.counter.decrement(counter.count - 1);
  };

  return (
    <div>
      <h1 data-testid="counter-value">Counter: {counter.count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      ;
    </div>
  );
};

export default Counter;
