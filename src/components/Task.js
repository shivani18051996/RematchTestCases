import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Task = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state.taskModel.list);
  const [isToggle, setIsToggle] = useState(false);
  const [newList, setNewList] = useState({});
  const [inputData, setInputData] = useState("");

  const handleAdd = () => {
    if (!inputData) {
      return;
    } else {
      dispatch.taskModel.addTask(inputData);
    }
    setInputData("");
  };
  const handleDelete = (i) => {
    dispatch.taskModel.removeTask(i);
  };
  const handleEdit = (id) => {
    const taskToEdit = list.find((task) => task.id === id);
    setNewList(taskToEdit);
    setInputData(taskToEdit.title);
    setIsToggle(true);
  };
  const handleUpdate = () => {
    if (!inputData) {
      return;
    }
    dispatch.taskModel.updateTask({ ...newList, title: inputData });
    setInputData("");
    setNewList({});
    setIsToggle(false);
  };
  return (
    <div className="task-div">
      <div className="login list">
        <h1>Add Task Here </h1>
        <form>
          <input
            placeholder="Enter Task"
            type="text"
            name="task"
            onChange={(e) => setInputData(e.target.value)}
            value={inputData}
          />
          {isToggle ? (
            <button type="button" className="btn" onClick={handleUpdate}>
              Update Task
            </button>
          ) : (
            <button type="button" className="btn" onClick={handleAdd}>
              ADD TASK
            </button>
          )}
        </form>
      </div>
      <div data-testid={`list`}>
        {list && list.length ? (
          <ul className="login list">
            <h1>Task List </h1>
            {list.map((task, index) => {
              return (
                <li key={index} className="listItem">
                  <span>{task.title}</span>
                  <div>
                    <button
                      data-testid={`edit-button-${index}`}
                      onClick={() => handleEdit(task.id)}
                      className="btn edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="btn del-btn"
                      data-testid={`delete-btn-${index}`}
                    >
                      Delete
                    </button>
                    <button
                      data-testid={`view-btn-${index}`}
                      className="btn view-btn"
                      onClick={() =>
                        navigate(`/task/${task.id}`, { state: task })
                      }
                    >
                      View
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="login list">No Task Found</div>
        )}
      </div>
    </div>
  );
};

export default Task;
