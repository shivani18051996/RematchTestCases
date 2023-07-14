export const User = {
  state: {
    userDetails: {},
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        userDetails: payload,
      };
    },
  },
  effects: (dispatch) => ({
    loginUser(payload, state, callback) {
      dispatch.User.setUser(payload);
    },
  }),
};
