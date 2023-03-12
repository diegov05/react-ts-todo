import React, { EventHandler, FC, FormEventHandler, MouseEventHandler, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../App';


interface Props {
    updatedTodo: Todo
    updateTodo: Function
    closeToggleEdit: Function
}


export const EditForm: FC<Props> = (props) => {

    const [updatedTodoName, setUpdatedTodoName] = useState(props.updatedTodo.name)

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.updateTodo({ ...props.updatedTodo, name: updatedTodoName })
    }

    useEffect(() => {
        const closeOnEscape = (e: KeyboardEvent) => {
            e.key === "Escape" && props.closeToggleEdit()
        }
        window.addEventListener('keydown', closeOnEscape)

        return () => {
            window.removeEventListener('keydown', closeOnEscape)
        }
    }, [props.closeToggleEdit])

    return (
        <div
            role="popup"
            onClick={() => { (e: MouseEvent) => { e.target === e.currentTarget && props.closeToggleEdit() } }}
        >
            <form onSubmit={handleFormSubmit}>
                <input
                    className='custom__input'
                    type="text"
                    id='todo'
                    value={updatedTodoName}
                    onInput={((e: React.FormEvent<HTMLInputElement>) => setUpdatedTodoName(e.currentTarget.value))}
                    required
                    autoFocus
                    maxLength={45}
                    placeholder="Update todo..."
                />
                <button
                    className='custom__button'
                    type='submit'
                    aria-label={`Confirm Updated Task to ${updatedTodoName}`}
                    style={{ backgroundColor: "var(--green-color)" }}
                >Update</button>
            </form>
        </div>
    )
}
