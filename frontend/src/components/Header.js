import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.webp';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src={logo} alt="Tiranga Green Energy Solutions" className="logo-image" />
              <span className="logo-text">Tiranga Green</span>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/benefits" onClick={() => setIsMenuOpen(false)}>Benefits</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/admin/login" className="admin-link-nav" onClick={() => setIsMenuOpen(false)}>Admin</Link>
          </nav>

          <div className="header-controls">
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
