import './style.css';
import React, { useState, useRef } from 'react';
import Header from './Header.js';
import Form from './Form.js';
import ToDoList from './ToDoList.js';

function App() {
  const [ToDos, setTodos] = useState(['Laundry', 'Clean kitchen']);

  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => [...prevTodos, name]);
    todoNameRef.current.value = '';
  }
  return (
    <div className="App">
      <Header />
      <Form handleAddTodo={handleAddTodo} todoNameRef={todoNameRef} />
      <ToDoList ToDos={ToDos} />
    </div>
  );
}

export default App;
