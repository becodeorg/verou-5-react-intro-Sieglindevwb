import React from 'react';

const ToDos = ['Laundry', 'Clean kitchen'];

function ToDoList() {
  return (
    <div>
      <h2>To do list:</h2>
      <ul>
        {ToDos.map((ToDo, index) => (
          <li key={index}>{ToDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;