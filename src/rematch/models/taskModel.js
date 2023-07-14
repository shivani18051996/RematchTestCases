export const taskModel = {
  state: {
    list: [],
  },
  reducers: {
    setList(state, newList) {
      return { ...state, list: newList };
    },
    setRemoveList(state, payload) {
      const taskDelete = state.list.filter((list) => list.id !== payload);
      return { ...state, list: taskDelete };
    },
    updateTask: (state, payload) => {
      const { id, title } = payload;
      const updatedList = state.list.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: title,
          };
        }
        return task;
      });
      return {
        ...state,
        list: updatedList,
      };
    },
  },
  effects: (dispatch) => ({
    addTask(payload, state) {
      const { list } = state.taskModel;
      const newTask = { id: new Date().getTime(), title: payload };
      const newList = [...list, newTask];
      dispatch.taskModel.setList(newList);
    },
    removeTask(payload, state) {
      dispatch.taskModel.setRemoveList(payload);
    },
  }),
};
