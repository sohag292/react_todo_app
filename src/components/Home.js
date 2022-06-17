import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { Todos } from './Todos';
import style from './home.module.css'
import { NewTodo } from './NewTodo';

export default function Home() {
    const [todos, setTodoS] = useState([])
    const handleTodo=(todo)=>{
        setTodoS((prevTodos)=>{
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }
    const handleRemoveTodo =(id)=>{
       
        setTodoS((prevTodos)=>{
            const filteredTodos = todos.filter((todo)=>todo.id !== id);
            return filteredTodos;
        })
    }
  return (
    <div className={style.container}>
        <h1 style={{color:"white"}}>Todo-List</h1>
        <NewTodo onAddTodo={handleTodo} ></NewTodo>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}></Todos>

        <button className={style.btn}onClick={() => setTodoS([])}>Clear All todos</button>

    </div>
  )
}
