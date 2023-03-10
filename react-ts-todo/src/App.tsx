import React, { useState } from 'react'
import { Form, EditForm, TodoList } from './components';
import { useLocalStorage } from './hooks';
import './App.css'

export interface Todo {
  name: string,
  checked: boolean,
  id: number
}

function App() {


  const [todos, setTodos] = useLocalStorage('react-ts-todo.todos', [])

  const [updatedTodo, setUpdatedTodo] = useState<Todo>();

  const [isEditing, setIsEditing] = useState(false)

  const [previousFocusElement, setPreviousFocusElement] = useState<HTMLElement>()

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos: Todo[]) => [...prevTodos, todo])
  }

  const deleteTodo = (id: number) => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter(todo => todo.id !== id));
  }

  const toggleTodo = (id: number) => {
    setTodos((prevTodos: Todo[]) => prevTodos.map(todo => (
      todo.id === id
        ? { ...todo, checked: !todo.checked }
        : todo
    )))
  }
  const updateTodo = (todo: Todo) => {
    setTodos((prevTodos: Todo[]) => prevTodos.map(t => (
      t.id === todo.id
        ? { ...t, name: todo.name }
        : t
    )))
    closeToggleEdit();
  }

  const toggleEdit = (todo: Todo) => {
    setUpdatedTodo(todo)
    setIsEditing(true)
    setPreviousFocusElement(document.activeElement as HTMLElement)
  }

  const closeToggleEdit = () => {
    setIsEditing(false)
    previousFocusElement?.focus();
  }


  return (
    <div className='app__wrapper'>
      <div className='app__wrapper-content'>
        <h1 className='headtext'>Todo App</h1>
        <Form addTodo={addTodo} />
        {
          isEditing && (
            <EditForm
              updatedTodo={updatedTodo!}
              updateTodo={updateTodo}
              closeToggleEdit={closeToggleEdit}
            />
          )
        }
        <ul>
          {todos &&
            (<TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              toggleEdit={toggleEdit}
            />
            )}
        </ul>
      </div >
    </div >
  )
}

export default App
