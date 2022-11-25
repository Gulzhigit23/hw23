import React from 'react'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'

function TodoItem() {
    const {todos} = useSelector((state) => state.todos)
    
  return (
    <ul>
        {todos.map((item) => {
            return <TodoList key={item.id}  {...item}/>
        })}
    </ul>
  )
}

export default TodoItem