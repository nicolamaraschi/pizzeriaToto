import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Totò<span>Ristorante</span></h2>
            <p>La vera pizza italiana dal 1985.</p>
            <div className="social-icons">
              <a href="javascript:void(0)" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="javascript:void(0)" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="javascript:void(0)" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="javascript:void(0)" aria-label="TripAdvisor"><MapPin size={16} /></a>
            </div>
          </div>

          <div className="footer-info">
            <div className="footer-section">
              <h3>Orari</h3>
              <ul>
                <li>Lunedì: Chiuso</li>
                <li>Martedì - Venerdì: 12:00-14:30, 19:00-00:00</li>
                <li>Sabato - Domenica: 12:00-14:30, 19:00-00:00</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contatti</h3>
              <ul>
                <li><MapPin size={16} /> Via Inganni, 83, Milano</li>
                <li><Phone size={16} /> 02 415 1643</li>
                <li><Mail size={16} /> info@totoristorante.it</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Link Utili</h3>
              <ul>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">Chi Siamo</Link></li>
                <li><Link to="/contact">Contatti</Link></li>
                <li><a href="javascript:void(0)">Prenota un Tavolo</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Totò Ristorante Pizzeria. Tutti i diritti riservati.</p>
          <div className="footer-legal">
            <a href="javascript:void(0)">Privacy Policy</a>
            <a href="javascript:void(0)">Termini e Condizioni</a>
            <a href="javascript:void(0)">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;