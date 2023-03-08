import React from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import "./Todo.css"

export const Todo = () => {
    return (
        <div className='app__todo__wrapper'>
            <div className="app__todo__wrapper-description">
                <input type="checkbox" name="todo" />
                <p className='paragraph'>Walk my dog</p>
            </div>
            <div className="app__todo__wrapper-icons">
                <PencilIcon className='custom__icon edit__icon' />
                <TrashIcon className='custom__icon trash__icon' />
            </div>
        </div>

    )
}
