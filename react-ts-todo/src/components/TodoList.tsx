import React, { FC } from 'react'
import { TodoItem } from './TodoItem';
import { Todo } from '../App';
import "./TodoList.css"

interface TodoList {
    todos: Array<Todo>,
    deleteTodo: Function
    toggleTodo: Function
    toggleEdit: Function
}

export const TodoList: FC<TodoList> = (props) => {
    return (
        <div>
            <ul>
                {props.todos.sort((a, b) => b.id - a.id).map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={props.deleteTodo}
                        toggleTodo={props.toggleTodo}
                        toggleEdit={props.toggleEdit}
                    />
                ))}
            </ul>
        </div>
    )
}
