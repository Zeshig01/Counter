import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './Slices/TodoSlice'
import counterReducer from './Slices/Slice'
const store =configureStore({

    reducer:{
        counter:counterReducer,
        todo: todoReducer,
    }, 
    
})
export default store;