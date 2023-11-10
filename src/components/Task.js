import React from "react";

function Task({ task, text, category, onDelete }) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(task)}>X</button>
    </div>
  );
}

export default Task;
