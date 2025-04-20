// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
    } else {
      alert('Your message has been sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" id="submit-btn">
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <p>For more inquiries, you can also reach us via:</p>
        <p>
          <a href="mailto:info@company.com">info@company.com</a>
        </p>
        <p>Or call us at (123) 456-7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
