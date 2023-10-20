import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import About from './pages/About/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='about' element={<About />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>

  )
}

export default App
