import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos:  [], 
        isStatus: false
    },
    reducers:{
    addTodo(state, action) {
    state.todos.push({
    id: Math.random().toString(),
    text: action.payload, 
    completed: false
    })
    state.isStatus = false
    
    },
    removeHandle(state, action) {
        
            state.todos = state.todos.filter((item) => item.id !== action.payload)
       
    } ,
    toggleTodoCompleted(state, action) {
     const   updatedToggle = state.todos.find((todo) => todo.id === action.payload.id)
     updatedToggle.completed = !updatedToggle.completed
    },
    }
})

export const {addTodo, removeHandle, toggleTodoCompleted} = todoSlice.actions

export default todoSlice.reducer