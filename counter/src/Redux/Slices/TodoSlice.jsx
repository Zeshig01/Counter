import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todo', 
    initialState:{
        todos:[], 
    }, 
    reducers:{
        add:(state, action)=>{
            state.todos.push(action.payload)
        }, 
        remove:(state, action)=>{
            state.todos = state.todos.filter((_, index) => index !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
            if (todo) {
              todo.completed = !todo.completed;
            }
         },
         resettodo:(state)=>{
            state.todos=[]            
         }
    }
})
export const { add, remove, resettodo } = todoSlice.actions;
export default todoSlice.reducer;