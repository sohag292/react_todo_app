import React, { useState } from 'react'
import style from './newtodo.module.css'
export const NewTodo = (props) => {
    const [todo, setTodo] = useState({title:"", desc:""})
    const {title, desc} = todo;

    const handleChange=(event)=>{
        const name = event.target.name;
        setTodo((oldTod)=>{
            return{...oldTod, [name]: event.target.value}
        })
       }

   const handleSubmit=(event)=>{
    event.preventDefault()
    props.onAddTodo(todo)
    setTodo({title:"", desc:""})
   }
  
  return (
   <form className={style.form} onSubmit={handleSubmit}  >
        <div className={style["form-field"]}>
            <label htmlFor="title">Title : </label>
            <input type="text" id='title' name='title' value={title} onChange={handleChange} placeholder="Enter a Name :" />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor="desc">Descripation : </label>
            <textarea type="text" id='desc' name='desc' value={desc}  onChange={handleChange} placeholder="Enter a descripation :"  />
        </div>
        <button type='submit'>Add Todo</button>
   </form>
  )
}
