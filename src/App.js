import React, { useState, useEffect } from 'react';
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoClean from './components/TodoClean';
import TopBar from './components/TopBar';


const LOCAL_STORAGE_KEY = "my-todo-list";

const App = () => {

  const [todos, setTodos] = useState([]);

  // adding todo to localstorage
  useEffect(() =>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos]);
  // adding todo to localstorage

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    // newTodos[index].isCompleted = true;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeAll = () => {
    // localStorage.removeItem(LOCAL_STORAGE_KEY);
    const newTodos = [];
    setTodos(newTodos);
  };


  return (
    <div className="app">
      < TopBar />
      <div className="total">{ todos.length > 0 && `Task(s) ${todos.length}` }</div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      {todos.length ? <TodoClean removeAll={removeAll}/> : null }
      
    </div>
  );
};

export default App;