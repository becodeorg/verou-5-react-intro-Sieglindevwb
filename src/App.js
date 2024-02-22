import './style.css';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header.js';
import Form from './Form.js';
import ToDoList from './ToDoList.js';

const LSKEY = 'MyTodoApp';

function App() {
  const [ToDos, setTodos] = useState([
    { id: 1, name: 'Laundry', completed: false },
    { id: 2, name: 'Clean kitchen', completed: false },
  ]);

  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LSKEY + '.ToDos', JSON.stringify(ToDos));
  }, [ToDos]);

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: name, completed: false },
    ]);
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
