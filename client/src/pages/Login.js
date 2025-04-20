import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();  // Hook for navigation

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      return;
    }

    setErrorMessage(''); // Clear previous error messages
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // Save token to localStorage or sessionStorage based on rememberMe
      if (rememberMe) {
        localStorage.setItem('token', res.data.token);
      } else {
        sessionStorage.setItem('token', res.data.token);
      }

      // Navigate to dashboard after successful login
      navigate('/dashboard'); // This is where you add it

    } catch (err) {
      setErrorMessage('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Redirect to forgot password page or display a modal for resetting password
    navigate('/forgot-password');
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-left">
          <h1 className="login-title">Medical Emergency Alert</h1>
          <p className="login-desc">Login to report or view emergency alerts instantly.</p>
        </div>
        <div className="login-right">
          <h2 className="form-title">Login</h2>

          {/* Display error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember Me Checkbox */}
          <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span>Remember Me</span>
          </div>

          <button
            className="form-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>

          {/* Forgot Password Link */}
          <p className="form-footer">
            <span onClick={handleForgotPassword} className="forgot-password-link">Forgot Password?</span>
          </p>

          <p className="form-footer">
            Don’t have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
