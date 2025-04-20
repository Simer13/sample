import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Helpline.css'; // Importing the custom CSS file

const helplines = {
  Fire: '🔥 Fire Brigade: 101',
  Accident: '🚑 Ambulance: 102',
  Medical: '🏥 Medical Emergency: 108',
  Police: '🚓 Police: 100',
  Women: '👩 Women Helpline: 1091',
  Default: '📞 Emergency Control Room: 112',
};

export default function Helpline() {
  const navigate = useNavigate();
  const { type } = useParams();

  const helpline = helplines[type] || helplines.Default;

  return (
    <div className="helpline-container">
      <h2 className="helpline-title">Emergency Type: {type}</h2>
      <p className="helpline-info">{helpline}</p>
      <button className="back-button" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}
