import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/admin" element={<AdminPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
