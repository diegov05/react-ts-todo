import React, { ChangeEvent, FC, useState } from 'react'
import { Todo } from '../App'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import "./TodoItem.css"

type TodoItem = {
    todo: Todo
    deleteTodo: Function
    toggleTodo: Function
    toggleEdit: Function
}

export const TodoItem: FC<TodoItem> = (props) => {
    const [isChecked, setChecked] = useState(props.todo.checked)

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!isChecked)
        props.toggleTodo(props.todo.id)
    }

    return (
        <li>
            <div className='app__todo__wrapper'>
                <div className="app__todo__wrapper-description">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        name={props.todo.name}
                        id={props.todo.id.toString()}
                    />
                    <p className='paragraph'>{isChecked ? <s>{props.todo.name}</s> : props.todo.name}</p>
                </div>
                <div className="app__todo__wrapper-icons">
                    <button
                        className='edit__button'
                        onClick={() => props.toggleEdit(props.todo)}
                    ><PencilIcon className='custom__icon' /></button>
                    <button
                        className='delete__button'
                        onClick={() => props.deleteTodo(props.todo.id)}
                    ><TrashIcon className='custom__icon' /></button>
                </div>
            </div>
        </li>
    )
}
