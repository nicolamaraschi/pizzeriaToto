// src/pages/ContactPage.js
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Map } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contatti</h1>
          <p>Siamo qui per te. Contattaci per qualsiasi informazione</p>
        </div>
      </div>

      <section className="contact-info section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Inviaci un <span>Messaggio</span></h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Oggetto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-submit">Invia Messaggio</button>
              </form>
            </div>

            <div className="contact-details">
              <h2>Informazioni di <span>Contatto</span></h2>
              <p className="contact-intro">Siamo disponibili per qualsiasi domanda o prenotazione. Non esitare a contattarci!</p>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-info-content">
                  <h3>Indirizzo</h3>
                  <p>Via Inganni, 83, 20147 Milano, Italia</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-info-content">
                  <h3>Telefono</h3>
                  <p>02 415 1643</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-info-content">
                  <h3>Email</h3>
                  <p>info@totoristorante.it</p>
                  <p>prenotazioni@totoristorante.it</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={20} />
                </div>
                <div className="contact-info-content">
                  <h3>Orari</h3>
                  <p>Lunedì: Chiuso</p>
                  <p>Martedì - Venerdì: 12:00-14:30, 19:00-00:00</p>
                  <p>Sabato - Domenica: 12:00-14:30, 19:00-00:00</p>
                </div>
              </div>
              
              <div className="contact-social">
                <h3>Seguici</h3>
                <div className="social-icons">
                  <button className="social-button" aria-label="Facebook"><Facebook size={18} /></button>
                  <button className="social-button" aria-label="Instagram"><Instagram size={18} /></button>
                  <button className="social-button" aria-label="Twitter"><Twitter size={18} /></button>
                  <button className="social-button" aria-label="TripAdvisor"><Map size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9728896312293!2d9.12856841555771!3d45.45528487910091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c35b5c093731%3A0xa29df8a263ce4d23!2sVia%20Inganni%2C%2083%2C%2020147%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2sus!4v1648645278412!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Totò Ristorante Pizzeria"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      <section className="reservation-cta section">
        <div className="container">
          <h2 className="section-title">Prenota un <span>Tavolo</span></h2>
          <p className="reservation-text">Preferisci cenare nel nostro ristorante? Chiamaci per prenotare!</p>
          <div className="reservation-buttons">
            <a href="tel:0241516433" className="btn">Chiama per Prenotare</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;