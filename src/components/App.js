import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {v4 as uuid} from "uuid";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [allTasks, setTasks] = useState(TASKS.map(currTask => (
    currTask = {
      text: currTask.text,
      category: currTask.category,
      id: uuid(),
    }
  )));
  
  function handleFilterClick(event) {
    setFilterCategory(event.target.name);
  };

  function handleTaskFormSubmit(newTask) {
    setTasks([...allTasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterClick={handleFilterClick} filterCategory={filterCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={allTasks} filterCategory={filterCategory} allTasks={allTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
