import './style.css';
import React, { useState, useRef } from 'react';
import Header from './Header.js';
import Form from './Form.js';
import ToDoList from './ToDoList.js';

function App() {
  const [ToDos, setTodos] = useState([
    { name: 'Laundry', completed: false },
    { name: 'Clean kitchen', completed: false },
  ]);

  const todoNameRef = useRef();

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => [...prevTodos, { name: name, completed: false }]);
    todoNameRef.current.value = '';
  }

  function toggleTodo(index) {
    const newTodos = [...ToDos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Header />
      <Form handleAddTodo={handleAddTodo} todoNameRef={todoNameRef} />
      <ToDoList ToDos={ToDos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
