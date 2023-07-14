export const counter = {
  state: {
    count: 1,
  },
  reducers: {
    increment: (state, payload) => {
      return {
        ...state,
        count: payload,
      };
    },
    decrement: (state, payload) => {
      return {
        ...state,
        count: payload,
      };
    },
  },
};
