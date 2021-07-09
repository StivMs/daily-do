import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import Header from './layout/Header'
import Todos from './todos/Todos'
import AddTodo from './layout/AddTodo';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(savedTodos || [])

  const [showAddTodo, setShowAddTodo] = useState(true)


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('todos'));
    if (items) {
      setTodos(items);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (index) => {
    const newTodoList = todos.filter((todo, todoID) => todoID !== index)
    setTodos(newTodoList);
  }

  return (
    <div className="App">
      <Header totalTodos={todos.length}
        onShowTodo={() => setShowAddTodo(!showAddTodo)}
        showAddLabel={showAddTodo} />
      {showAddTodo && <AddTodo onAddTodo={addTodo} />}

      {todos.length > 0 ?
        (<Todos todos={todos}
          onDelete={removeTodo} />) :
        (<h2 className="emptyTodo">Nothing to do today? 🤔</h2>)}

    </div>
  );
}


export default App;
