import React, { EventHandler, FC, FormEventHandler, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    addTodo: Function
}


export const Form: FC<Props> = (props) => {

    const [todo, setTodo] = useState("")

    const addTodo = props.addTodo;

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo({
            name: todo,
            checked: false,
            id: Date.now()
        });
        setTodo("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="app__wrapper-content_input">
                <input
                    className='custom__input'
                    type="text"
                    id='todo'
                    value={todo}
                    onInput={((e: React.FormEvent<HTMLInputElement>) => setTodo(e.currentTarget.value))}
                    required
                    autoFocus
                    maxLength={45}
                    placeholder="Type a todo..."
                />
                <button
                    className='custom__button'
                    type='submit'
                    aria-label='Add Todo'

                >Add</button>
            </div>
        </form >
    )
}
