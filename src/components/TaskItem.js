import React from "react";

const TaskItem = ({ task }) => {
  return (
    <li>
      <strong>{task.id}:</strong> {task.title} - <em>{task.status}</em> ({task.estimatedTime})
    </li>
  );
};

export default TaskItem;
