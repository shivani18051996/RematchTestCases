import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import TaskDetail from "./components/TaskDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/task" element={<Task />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
      {/* <div>Hello</div> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
