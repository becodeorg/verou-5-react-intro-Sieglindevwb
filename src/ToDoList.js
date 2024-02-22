import React from 'react';

function ToDoList({ ToDos, toggleTodo }) {
  return (
    <div>
      <h2>To do list:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {ToDos.map((ToDo, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2px',
            }}
          >
            <input
              type="checkbox"
              checked={ToDo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span
              style={{
                textDecoration: ToDo.completed ? 'line-through' : 'none',
                marginLeft: '10px',
              }}
            >
              {ToDo.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
