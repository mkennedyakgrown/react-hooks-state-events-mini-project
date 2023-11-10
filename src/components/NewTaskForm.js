import { React, useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [categoryOption, setCategoryOption] = useState();
  const [taskText, setText] = useState("");

  function onCategoryChange(event) {
    setCategoryOption(event.target.value);
  };

  function onFormSubmit(event) {
    event.preventDefault();
    
    onTaskFormSubmit({
      text: taskText,
      category: categoryOption,
      id: uuid(),
    });
  };

  return (
    <form className="new-task-form" onSubmit={onFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={e => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onCategoryChange} value={categoryOption}>
          {categories.filter(option => option !== "All").map(category => (
            <option name={category} key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
