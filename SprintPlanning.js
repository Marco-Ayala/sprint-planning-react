import React from "react";
import { sprintData } from "../data/sprintData";
import TaskList from "./TaskList";

const SprintPlanning = () => {
  return (
    <div>
      <h1>{sprintData.sprintName}</h1>
      <p><strong>Duración:</strong> {sprintData.duration}</p>
      <p><strong>Objetivo:</strong> {sprintData.goal}</p>
      <h2>Tareas del Sprint</h2>
      <TaskList tasks={sprintData.tasks} />
    </div>
  );
};

export default SprintPlanning;