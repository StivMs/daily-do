import React from 'react'
import { useState } from 'react'
import './App.css';
import Header from './layout/Header'
import Todos from './todos/Todos'
import AddTodo from './layout/AddTodo';



function App() {
  const [todos, setTodos] = useState([])
  const [showAddTodo, setShowAddTodo] = useState(true)

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
