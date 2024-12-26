import { useState } from 'react'
import { BrowserRouter as Route, Routes, Router } from 'react-router-dom'
import './App.css'
import Counter from './assets/component/Counter'
import Todo from './component/Todo'


function App() {
  

  return (
   <>
{/* <Router>
  <Routes>
    <Route>
      path="/" element{<Counter />}
    </Route>
  </Routes>
</Router> */}
   
  <Counter/>
  <Todo/>
  
   </>
  )
}

export default App
