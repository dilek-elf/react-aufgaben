// App.jsx
import "./App.css";
import { useState } from "react";
import TaskCard from "./components/TaskCard";

export default function App() {
  const [tasks, setTasks] = useState([
    { title: "Build Hompage", status: "open", priority: "high" },
    { title: "Write CSS", status: "in progress", priority: "medium" },
    { title: "Learn React", status: "completed", priority: "low" },
  ]);

  function cycleStatus(index) {
    const updated = [...tasks];

    if (updated[index].status === "open") {
      updated[index].status = "in progress";
    } else if (updated[index].status === "in progress") {
      updated[index].status = "completed";
    } else {
      updated[index].status = "open";
    }

    setTasks(updated);
  }

  return (
    <div className="container">
      <h1>Task Monitor</h1>
      <p>Here will be shown all your current tasks</p>

      {/* this parts will take every objects from "tasks" above*/}
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          status={task.status}
          priority={task.priority}
          onClick={() => cycleStatus(index)}
        />
      ))}
    </div>
  );
}