// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <div className="section">
          <h2>Our Mission</h2>
          <p>We aim to provide the best services to our users with cutting-edge technology and a user-friendly interface. Our goal is to make life easier and more convenient through our products.</p>
          <div className="section-toggle">Read More</div>
          <div className="section-content">
            <p>We focus on innovation and customer satisfaction, ensuring that each service we provide meets the highest standards of quality and efficiency. Our team works tirelessly to bring the most reliable and cost-effective solutions to our customers.</p>
          </div>
        </div>
        <div className="section">
          <h2>Our Vision</h2>
          <p>To be a leading provider of solutions that improve lives and shape the future with groundbreaking technologies.</p>
          <div className="section-toggle">Read More</div>
          <div className="section-content">
            <p>We envision a world where our services and technologies are used globally to drive positive change, empower individuals, and create long-term value for communities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
