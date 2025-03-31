// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Flame, Utensils, Bike, Quote } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <h1>La vera arte della<br /> pizza italiana</h1>
          <p>Ingredienti freschi, ricette tradizionali, passione in ogni morso</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn">Scopri il Menu</Link>
            <a href="tel:0241516433" className="btn btn-outline">Prenota Ora</a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features section">
        <div className="container">
        <div className="features-grid">
            <div className="feature-item">
                <div className="feature-icon">
                <Pizza size={24} />
                </div>
                <h3>Ingredienti Freschi</h3>
                <p>Utilizziamo solo ingredienti freschi e di stagione, selezionati dai migliori produttori locali.</p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">
                <Flame size={24} />
                </div>
                <h3>Forno a Legna</h3>
                <p>La nostra pizza è cotta in un autentico forno a legna che raggiunge temperature elevate per una cottura perfetta.</p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">
                <Utensils size={24} />
                </div>
                <h3>Tradizione Italiana</h3>
                <p>Seguiamo ricette tradizionali italiane tramandate di generazione in generazione.</p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">
                <Bike size={24} />
                </div>
                <h3>Consegna Veloce</h3>
                <p>Consegniamo la tua pizza ancora calda direttamente a casa tua in meno di 30 minuti.</p>
            </div>
            </div>
        </div>
      </section>

      {/* Popular Pizzas Section */}
      <section className="popular-pizzas section">
        <div className="container">
          <h2 className="section-title">Le Nostre <span>Specialità</span></h2>
          <div className="pizza-grid">
            <div className="pizza-card">
              <div className="pizza-img">
                <img src="/images/pizza-margherita.jpg" alt="Pizza Margherita" />
                <div className="pizza-tag">Classica</div>
              </div>
              <div className="pizza-info">
                <h3>Margherita</h3>
                <p>Pomodoro San Marzano, mozzarella fior di latte, basilico fresco, olio EVO</p>
                <div className="pizza-footer">
                  <span className="price">€8.50</span>
                  <button className="add-to-cart">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="pizza-card">
              <div className="pizza-img">
                <img src="/images/pizza-diavola.jpg" alt="Pizza Diavola" />
                <div className="pizza-tag">Piccante</div>
              </div>
              <div className="pizza-info">
                <h3>Diavola</h3>
                <p>Pomodoro San Marzano, mozzarella fior di latte, salame piccante, olio al peperoncino</p>
                <div className="pizza-footer">
                  <span className="price">€10.50</span>
                  <button className="add-to-cart">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="pizza-card">
              <div className="pizza-img">
                <img src="/images/pizza-quattro-formaggi.jpg" alt="Pizza Quattro Formaggi" />
                <div className="pizza-tag">Speciale</div>
              </div>
              <div className="pizza-info">
                <h3>Quattro Formaggi</h3>
                <p>Mozzarella fior di latte, gorgonzola DOP, parmigiano reggiano, pecorino romano</p>
                <div className="pizza-footer">
                  <span className="price">€11.00</span>
                  <button className="add-to-cart">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="pizza-card">
              <div className="pizza-img">
                <img src="/images/pizza-prosciutto-funghi.jpg" alt="Pizza Prosciutto e Funghi" />
                <div className="pizza-tag">Popolare</div>
              </div>
              <div className="pizza-info">
                <h3>Prosciutto e Funghi</h3>
                <p>Pomodoro San Marzano, mozzarella fior di latte, prosciutto cotto, funghi champignon</p>
                <div className="pizza-footer">
                  <span className="price">€10.00</span>
                  <button className="add-to-cart">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="view-more">
            <Link to="/menu" className="btn">Vedi Tutto il Menu</Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/pizzeria-interior.jpg" alt="Interno della Pizzeria Elegante" />
            </div>
            <div className="about-content">
              <h2>La Nostra <span>Storia</span></h2>
              <p>Dal 1985, Pizzeria Elegante porta avanti la tradizione della vera pizza napoletana nel cuore di Milano. La nostra filosofia è semplice: ingredienti di prima qualità, ricette tradizionali e passione in ogni pizza che serviamo.</p>
              <p>Il nostro maestro pizzaiolo, Antonio Rossi, ha imparato l'arte della pizza nella sua Napoli natale, e ha portato con sé tutti i segreti della tradizione partenopea.</p>
              <Link to="/about" className="btn">Scopri di Più</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">Cosa Dicono i <span>Nostri Clienti</span></h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fa-solid fa-quote-left"></i>
                <p>La migliore pizza che abbia mai mangiato a Milano! Impasto leggero e digeribile, ingredienti freschi e servizio impeccabile. Tornerò sicuramente!</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/testimonial-1.jpg" alt="Cliente" />
                <div>
                  <h4>Marco Bianchi</h4>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fa-solid fa-quote-left"></i>
                <p>Atmosfera accogliente, personale cordiale e pizza fantastica. La Diavola è piccante al punto giusto e l'impasto è semplicemente perfetto. Consigliatissima!</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/testimonial-2.jpg" alt="Cliente" />
                <div>
                  <h4>Giulia Verdi</h4>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fa-solid fa-quote-left"></i>
                <p>Ho ordinato a domicilio e la pizza è arrivata calda e perfetta. Si sente che utilizzano ingredienti di qualità e la crosta è croccante fuori e morbida dentro. Da provare!</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/testimonial-3.jpg" alt="Cliente" />
                <div>
                  <h4>Luca Ferrari</h4>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto a gustare la migliore pizza di Milano?</h2>
            <p>Chiamaci per prenotare un tavolo</p>
            <div className="cta-buttons">
              <a href="tel:0241516433" className="btn">Prenota Ora</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;