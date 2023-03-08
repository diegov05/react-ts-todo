import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./components/"
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className='app__wrapper'>
      <div className="app__wrapper-content">
        <h1 className='headtext'>Todo App</h1>
        <div className="app__wrapper-content_input">
          <input className='custom__input' type="text" name="todo" id="todo" placeholder='Type a todo...' />
          <button className='custom__button'>ADD</button>
        </div>
        <Todo />
      </div>
    </div >
  )
}

export default App
