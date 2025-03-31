import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.jpg" alt="Totò Ristorante Pizzeria Logo" />
          <div className="logo-text">
            <h1>Totò</h1>
            <p>Ristorante Pizzeria</p>
          </div>
        </Link>
        
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contatti
              </Link>
            </li>
          </ul>
          <div className="nav-cta">
            <a href="tel:0241516433" className="phone">
              <Phone size={18} /> 02 415 1643
            </a>
            <button className="btn btn-order">Ordina Ora</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;