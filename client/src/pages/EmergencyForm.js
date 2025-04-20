import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EmergencyForm.css';

export default function EmergencyForm() {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const submitEmergency = async (e) => {
    e.preventDefault(); // prevent the default form submission
    try {
      await axios.post('http://localhost:5000/api/emergency/create', {
        type, location, details
      });
      alert("Emergency Submitted");
      navigate(`/helpline/${type}`);  // redirect with emergency type
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <div className="emergency-form-container">
      <h2 className="form-title">Report an Emergency</h2>
      <form className="emergency-form" onSubmit={submitEmergency}>
        <label htmlFor="type">Emergency Type</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="e.g., Fire, Accident, Medical"
          required
        />
        
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter the location"
          required
        />
        
        <label htmlFor="details">Details</label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Provide a brief description of the emergency"
          required
        ></textarea>
        
        <button type="submit" className="submit-button">Submit Report</button>
      </form>
    </div>
  );
}
