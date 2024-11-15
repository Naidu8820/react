import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const nav = useNavigate();

  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    setError(null);

    
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    
    if (email === 'user@gmail.com' && password === '1234') {
      nav('/dashboard');  // Redirect to the home page
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>

    
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:user@gmail.com</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:1234</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
  );
}

export default Login;
