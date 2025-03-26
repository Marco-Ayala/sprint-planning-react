import React, { useState } from "react";
import { tasksData } from "../data/tasksData";
import TaskList from "./TaskList";

const ScrumBoard = () => {
  const [tasks, setTasks] = useState(tasksData);

  const moveTask = (taskToMove) => {
    const nextStatus = {
      "Product Backlog": "Sprint Backlog",
      "Sprint Backlog": "En progreso",
      "En progreso": "Completado"
    }[taskToMove.status];

    setTasks(tasks.map(task => 
      task.id === taskToMove.id ? { ...task, status: nextStatus } : task
    ));
  };

  return (
    <div className="scrum-board">
      <TaskList tasks={tasks} status="Product Backlog" onMove={moveTask} />
      <TaskList tasks={tasks} status="Sprint Backlog" onMove={moveTask} />
      <TaskList tasks={tasks} status="En progreso" onMove={moveTask} />
      <TaskList tasks={tasks} status="Completado" onMove={moveTask} />
    </div>
  );
};

export default ScrumBoard;
