import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(
      (u) => u.userName === userName && u.password === password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setUser(user); // ✅ This is now called after 'user' is defined
      navigate('/home');
    } else {
      alert('Invalid username or password!');
    }
  };
  const goToRegister=()=>(
    navigate('/register')
  )

  return (
    <div
      style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}
      className="login-screen text-white flex items-center justify-center"
    >
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label>
          <input
            className="rounded-md p-2 text-black"
            type="text"
            value={userName}
            required
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            className="rounded-md p-2 text-black"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" style={{ width: '100%' }} className="p-2">
          Login
        </button>
        {/* <a href="" onClick={goToRegister()}>New User? Register her.</a> */}
      </form>
    </div>
  );
};

export default LoginPage;
