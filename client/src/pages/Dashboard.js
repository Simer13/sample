import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user = localStorage.getItem('user') || 'User';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  const fetchAlerts = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/emergency/all', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const reversed = res.data.reverse();
      setAlerts(reversed);
      setFilteredAlerts(reversed);
    } catch (err) {
      console.error('Failed to fetch alerts', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    filterAlerts(typeFilter, keyword);
  };

  const handleFilter = (type) => {
    setTypeFilter(type);
    filterAlerts(type, search);
  };

  const filterAlerts = (type, keyword) => {
    let results = alerts;
    if (type !== 'All') {
      results = results.filter((a) => a.type === type);
    }
    if (keyword) {
      results = results.filter(
        (a) =>
          a.type.toLowerCase().includes(keyword) ||
          a.location.toLowerCase().includes(keyword)
      );
    }
    setFilteredAlerts(results);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {user}</h1>
        <button className="logout-button" onClick={logout}>Logout</button>
      </header>

      <div className="dashboard-controls">
        <input
          type="text"
          placeholder="Search alerts..."
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="filter-buttons">
          {['All', 'Medical', 'Fire', 'Police'].map((type) => (
            <button
              key={type}
              className={`filter-button ${typeFilter === type ? 'active' : ''}`}
              onClick={() => handleFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="quick-links">
        <button className="quick-link" onClick={() => navigate('/report')}>+ Report Emergency</button>
        <button className="quick-link" onClick={() => navigate('/helpline/medical')}>📞 Helpline</button>
        <button className="quick-link" onClick={() => navigate('/')}>👤 Profile</button>
      </div>

      <section className="alerts-section">
        <h2>Emergency Alerts</h2>
        {loading ? (
          <p>Loading alerts...</p>
        ) : filteredAlerts.length === 0 ? (
          <p className="no-alerts-text">No emergency alerts found.</p>
        ) : (
          <ul className="alert-list">
            {filteredAlerts.slice(0, 10).map((alert) => (
              <li key={alert._id} className="alert-item">
                <div className="alert-info">
                  <span className={`alert-tag ${alert.type.toLowerCase()}`}>{alert.type}</span>
                  <div><strong>Location:</strong> {alert.location}</div>
                  <div><strong>Details:</strong> {alert.details || 'No details provided'}</div>
                </div>
                <div className="alert-time">{new Date(alert.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Additional Static Sections */}
<section className="quick-access">
  <h2 className="section-title">Quick Access</h2>
  <div className="quick-access-cards">
    <div className="card" onClick={() => navigate('/helpline/medical')}>
      <h3>Medical Emergency</h3>
      <p>Get immediate medical help</p>
    </div>
    <div className="card" onClick={() => navigate('/helpline/fire')}>
      <h3>Fire Emergency</h3>
      <p>Contact the fire department</p>
    </div>
    <div className="card" onClick={() => navigate('/helpline/police')}>
      <h3>Police Emergency</h3>
      <p>Contact the nearest police station</p>
    </div>
  </div>
</section>
<section className="info-section">
  <h2 className="section-title">More Information</h2>
  <div className="info-cards">
    <div className="card" onClick={() => navigate('/about')}>
      <h3>About Us</h3>
      <p>Learn more about our mission and vision</p>
    </div>
    <div className="card" onClick={() => navigate('/contact')}>
      <h3>Contact Us</h3>
      <p>Reach out for queries or support</p>
    </div>
  </div>
</section>

  
      </div>
    );
  }
