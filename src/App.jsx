import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
function App() {
   const [user, setUser] = useState(null);
useEffect(() => {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage user_name={user}/>}/>
      <Route path="/admin" element={<AdminPage/>}></Route>
       <Route path="/login" element={<LoginPage setUser={setUser}/>}></Route>
       <Route path="/register" element={<RegisterPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
