import React from 'react';

function ToDoList({ ToDos }) {
  return (
    <div>
      <h2>To do list:</h2>
      <ul>
        {ToDos.map((ToDo, index) => (
          <li key={index}>
            <input type="checkbox" />
            {ToDo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
