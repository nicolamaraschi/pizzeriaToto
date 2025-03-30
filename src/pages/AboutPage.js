// Modifica le importazioni all'inizio del file
import React from 'react';
import { Leaf, Handshake, Heart, Users } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>Chi <span>Siamo</span></h1>
          <p>La nostra storia, i nostri valori e la nostra passione per la pizza</p>
        </div>
      </div>

      <section className="about-story section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <h2>La Nostra <span>Storia</span></h2>
              <p>Tutto è iniziato nel 1985, quando Antonio Rossi, maestro pizzaiolo napoletano, decise di portare a Milano la vera tradizione della pizza partenopea. Con pochi mezzi ma tanta passione, aprì il suo piccolo locale nel cuore della città.</p>
              <p>Nel corso degli anni, Pizzeria Elegante è cresciuta, mantenendo però sempre lo stesso spirito e la stessa dedizione alla qualità che l'ha contraddistinta fin dall'inizio. Oggi siamo una realtà consolidata, ma continuiamo a lavorare con la stessa passione di 35 anni fa.</p>
              <p>La nostra filosofia è semplice: ingredienti freschi e di qualità, ricette tradizionali tramandate di generazione in generazione, e un'atmosfera accogliente dove ogni cliente si senta come a casa.</p>
            </div>
            <div className="about-story-image">
              <img src="/images/about-story.jpg" alt="La nostra storia" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">I Nostri <span>Valori</span></h2>
          <div className="about-values-grid">
            <div className="about-value-item">
                <div className="about-value-icon">
                <Leaf size={24} />
                </div>
                <h3>Qualità</h3>
                <p>Utilizziamo solo ingredienti di prima qualità, selezionati con cura dai migliori produttori locali e italiani.</p>
            </div>
            <div className="about-value-item">
                <div className="about-value-icon">
                <Handshake size={24} />
                </div>
                <h3>Tradizione</h3>
                <p>Manteniamo vive le ricette tradizionali napoletane, con un tocco di innovazione che rispetta sempre la tradizione.</p>
            </div>
            <div className="about-value-item">
                <div className="about-value-icon">
                <Heart size={24} />
                </div>
                <h3>Passione</h3>
                <p>Mettiamo il cuore in ogni pizza che prepariamo, perché crediamo che la vera differenza la faccia la passione.</p>
            </div>
            <div className="about-value-item">
                <div className="about-value-icon">
                <Users size={24} />
                </div>
                <h3>Ospitalità</h3>
                <p>Ci impegniamo a creare un ambiente accogliente dove ogni cliente si senta benvenuto e coccolato.</p>
            </div>
            </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <h2 className="section-title">Il Nostro <span>Team</span></h2>
          <div className="about-team-grid">
            <div className="team-member">
              <div className="team-member-img">
                <img src="/images/team-1.jpg" alt="Antonio Rossi" />
              </div>
              <div className="team-member-info">
                <h3>Antonio Rossi</h3>
                <p className="team-role">Fondatore & Maestro Pizzaiolo</p>
                <p className="team-bio">Nato e cresciuto a Napoli, ha portato con sé tutti i segreti della vera pizza napoletana.</p>
                <div className="team-social">
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-img">
                <img src="/images/team-2.jpg" alt="Maria Bianchi" />
              </div>
              <div className="team-member-info">
                <h3>Maria Bianchi</h3>
                <p className="team-role">Chef & Responsabile Cucina</p>
                <p className="team-bio">Con la sua creatività e passione per la cucina italiana, arricchisce il nostro menu con piatti unici.</p>
                <div className="team-social">
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-img">
                <img src="/images/team-3.jpg" alt="Luca Verdi" />
              </div>
              <div className="team-member-info">
                <h3>Luca Verdi</h3>
                <p className="team-role">Manager & Sommelier</p>
                <p className="team-bio">La sua esperienza nel settore della ristorazione e la sua conoscenza dei vini italiani sono preziose per noi.</p>
                <div className="team-social">
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-img">
                <img src="/images/team-4.jpg" alt="Giulia Russo" />
              </div>
              <div className="team-member-info">
                <h3>Giulia Russo</h3>
                <p className="team-role">Responsabile Sala</p>
                <p className="team-bio">Con il suo sorriso e la sua professionalità fa sentire ogni cliente come a casa.</p>
                <div className="team-social">
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-facts">
        <div className="container">
          <div className="about-facts-grid">
            <div className="about-fact">
              <div className="about-fact-number">35+</div>
              <div className="about-fact-text">Anni di Esperienza</div>
            </div>
            <div className="about-fact">
              <div className="about-fact-number">20</div>
              <div className="about-fact-text">Tipi di Pizza</div>
            </div>
            <div className="about-fact">
              <div className="about-fact-number">10k+</div>
              <div className="about-fact-text">Clienti Soddisfatti</div>
            </div>
            <div className="about-fact">
              <div className="about-fact-number">5</div>
              <div className="about-fact-text">Premi Vinti</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-gallery section">
        <div className="container">
          <h2 className="section-title">La Nostra <span>Galleria</span></h2>
          <div className="about-gallery-grid">
            <div className="gallery-item">
              <img src="/images/gallery-1.jpg" alt="La nostra pizzeria" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-2.jpg" alt="La nostra pizzeria" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-3.jpg" alt="La nostra pizzeria" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-4.jpg" alt="La nostra pizzeria" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-5.jpg" alt="La nostra pizzeria" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-6.jpg" alt="La nostra pizzeria" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Pronto a provare la nostra pizza?</h2>
            <p>Vieni a trovarci o ordina online</p>
            <div className="about-cta-buttons">
              <a href="#" className="btn">Ordina Online</a>
              <a href="#" className="btn btn-outline">Prenota un Tavolo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;