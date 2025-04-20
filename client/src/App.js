import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmergencyForm from './pages/EmergencyForm';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';  // Import AboutUs component
import ContactUs from './pages/ContactUs';
// src/App.js

import HelplinePage from './pages/Helpline'; // ✅ correct path



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<EmergencyForm />} />
        <Route path="/helpline/:type" element={<HelplinePage />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/about" element={<AboutUs />} />  {/* About Us page */}
        <Route path="/contact" element={<ContactUs />} />  {/* Contact Us page */}
      
      </Routes>
    </Router>
  );
}

export default App;
