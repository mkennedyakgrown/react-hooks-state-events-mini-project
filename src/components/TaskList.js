import { React, useState } from "react";
import Task from "./Task.js";

function TaskList({ tasks, filterCategory = "All", setTasks }) {

  function handleDelete(task) {
    setTasks(tasks.filter(currTask => currTask != task));
  }

  function filterTasks(filterCategory) {
    if (filterCategory === "All") {
      return tasks;
    }
    return tasks.filter(task => task.category === filterCategory);
  }

  return (
    <div className="tasks">
      {filterTasks(filterCategory).map(task => (
        <Task task={task} text={task.text} category={task.category} onDelete={handleDelete} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;