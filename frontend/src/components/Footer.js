import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Tiranga Green Energy</h4>
            <p>Leading solar energy solutions for a sustainable future.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Tiranga Green Energy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
