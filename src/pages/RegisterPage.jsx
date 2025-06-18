import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
function RegisterPage() {
        const [userName,setUserName]=useState();
        const [password,setPassword]=useState();


  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === userName);

    if (userExists) {
      alert('User already exists!');
      return;
    }

    users.push({ userName, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
  };
   const navigate=useNavigate();       
const goToLogin=()=>(
    navigate('/login')
)
  return (

    <div className="h-full flex items-center justify-center login-screen">
    <div className='bg-blue-100 p-4 flex justify-center rounded-md'>
        <form action="" onSubmit={handleRegister}>
        <div className='bg-white flex flex-col gap-2 w-80 justify-center p-4 rounded-md'>
            <input type="text" placeholder='UserName' className='p-2 border border-black rounded-md' 
            value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder='Password' className='p-2 border border-black rounded-md'
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button variant='primary'>Register</Button>
            <a className="text-sm mt-1 text-blue-600" onClick={goToLogin}>Already a User? Login</a>
        </div>
        </form>
    </div>
    </div>
  )
}

export default RegisterPage