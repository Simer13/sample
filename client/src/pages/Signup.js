import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Add your custom styles

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const signup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      alert(res.data.msg);
      navigate('/');  // Redirect to login page after successful registration
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper">
        <div className="signup-left">
          <h1 className="signup-title">Medical Emergency Alert</h1>
          <p className="signup-desc">Sign up to report and view emergency alerts instantly.</p>
        </div>
        <div className="signup-right">
          <h2 className="form-title">Sign Up</h2>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="form-button" onClick={signup}>Sign Up</button>
          <p className="form-footer">
  Already have an account? <Link to="/" className="login-link">Login</Link>
</p>
        </div>
      </div>
    </div>
  );
}
