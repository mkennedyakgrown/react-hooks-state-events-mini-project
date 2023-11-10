import React from "react";

function CategoryFilter({ categories, onFilterClick, filterCategory }) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button name={category} key={category} onClick={onFilterClick} className={category === filterCategory ? 'selected' : ''}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
