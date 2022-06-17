import React from 'react'
import { Todo } from './Todo';
import styel from './todos.module.css'
export const Todos = (props) => {
    console.log(props.todos);
  return (
    <section className={styel.todos}>
        {
            props.todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}></Todo>)
        }
    </section>  )
}
