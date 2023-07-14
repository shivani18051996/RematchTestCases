import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TaskDetail = () => {
  const taskDetails = useLocation();
  const navigate = useNavigate();
  console.log(taskDetails, "taskDetails");
  return (
    <div className="login task">
      <div>
        <span>Title: {taskDetails.state.title}</span>
        <br></br>
        <span>Id:{taskDetails.state.id}</span>
      </div>
      <button type="button" className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default TaskDetail;
