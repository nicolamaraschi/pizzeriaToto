// src/pages/MenuPage.js
import React, { useState } from 'react';
import './MenuPage.css';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('pizze');

  const categories = [
    { id: 'pizze', name: 'Pizze' },
    { id: 'antipasti', name: 'Antipasti' },
    { id: 'insalate', name: 'Insalate' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'bevande', name: 'Bevande' }
  ];

  const menuItems = {
    pizze: [
      {
        id: 1,
        name: 'Margherita',
        description: 'Pomodoro San Marzano, mozzarella fior di latte, basilico fresco, olio EVO',
        price: '8.50',
        image: '/images/pizza-margherita.jpg',
        tags: ['Classica']
      },
      {
        id: 2,
        name: 'Marinara',
        description: 'Pomodoro San Marzano, aglio, origano, olio EVO',
        price: '7.00',
        image: '/images/pizza-marinara.jpg',
        tags: ['Vegana']
      },
      {
        id: 3,
        name: 'Diavola',
        description: 'Pomodoro San Marzano, mozzarella fior di latte, salame piccante, olio al peperoncino',
        price: '10.50',
        image: '/images/pizza-diavola.jpg',
        tags: ['Piccante']
      },
      {
        id: 4,
        name: 'Quattro Formaggi',
        description: 'Mozzarella fior di latte, gorgonzola DOP, parmigiano reggiano, pecorino romano',
        price: '11.00',
        image: '/images/pizza-quattro-formaggi.jpg',
        tags: ['Vegetariana']
      },
      {
        id: 5,
        name: 'Capricciosa',
        description: 'Pomodoro San Marzano, mozzarella fior di latte, prosciutto cotto, funghi, carciofi, olive nere, olio EVO',
        price: '11.50',
        image: '/images/pizza-capricciosa.jpg',
        tags: ['Speciale']
      },
      {
        id: 6,
        name: 'Bufala',
        description: 'Pomodoro San Marzano, mozzarella di bufala DOP, basilico fresco, olio EVO',
        price: '10.00',
        image: '/images/pizza-bufala.jpg',
        tags: ['Premium']
      },
      {
        id: 7,
        name: 'Prosciutto e Funghi',
        description: 'Pomodoro San Marzano, mozzarella fior di latte, prosciutto cotto, funghi champignon',
        price: '10.00',
        image: '/images/pizza-prosciutto-funghi.jpg',
        tags: ['Popolare']
      },
      {
        id: 8,
        name: 'Ortolana',
        description: 'Pomodoro San Marzano, mozzarella fior di latte, verdure grigliate di stagione, olio EVO',
        price: '10.50',
        image: '/images/pizza-ortolana.jpg',
        tags: ['Vegetariana']
      }
    ],
    antipasti: [
      {
        id: 9,
        name: 'Bruschetta al Pomodoro',
        description: 'Pane tostato con pomodorini, basilico, aglio e olio EVO',
        price: '6.00',
        image: '/images/bruschetta.jpg',
        tags: ['Vegetariana']
      },
      {
        id: 10,
        name: 'Antipasto Misto',
        description: 'Selezione di salumi e formaggi italiani con olive e grissini',
        price: '12.00',
        image: '/images/antipasto-misto.jpg',
        tags: ['Classico']
      },
      {
        id: 11,
        name: 'Bufala con Prosciutto',
        description: 'Mozzarella di bufala DOP con prosciutto crudo di Parma',
        price: '9.50',
        image: '/images/bufala-prosciutto.jpg',
        tags: ['Premium']
      },
      {
        id: 12,
        name: 'Frittura di Calamari',
        description: 'Calamari fritti serviti con salsa al limone',
        price: '10.00',
        image: '/images/calamari.jpg',
        tags: ['Mare']
      }
    ],
    insalate: [
      {
        id: 13,
        name: 'Insalata Caprese',
        description: 'Pomodoro, mozzarella di bufala, basilico e olio EVO',
        price: '8.50',
        image: '/images/insalata-caprese.jpg',
        tags: ['Vegetariana']
      },
      {
        id: 14,
        name: 'Insalata Mista',
        description: 'Insalata verde, pomodori, carote, olive e cetrioli',
        price: '6.50',
        image: '/images/insalata-mista.jpg',
        tags: ['Vegana']
      },
      {
        id: 15,
        name: 'Insalata di Rucola',
        description: 'Rucola, scaglie di parmigiano, pomodorini e noci',
        price: '7.50',
        image: '/images/insalata-rucola.jpg',
        tags: ['Vegetariana']
      }
    ],
    dessert: [
      {
        id: 16,
        name: 'Tiramisù',
        description: 'Classico dessert italiano con mascarpone, caffè e savoiardi',
        price: '5.50',
        image: '/images/tiramisu.jpg',
        tags: ['Classico']
      },
      {
        id: 17,
        name: 'Panna Cotta',
        description: 'Crema cotta servita con coulis di frutti di bosco',
        price: '5.00',
        image: '/images/panna-cotta.jpg',
        tags: ['Tradizionale']
      },
      {
        id: 18,
        name: 'Cannolo Siciliano',
        description: 'Dolce siciliano ripieno di crema di ricotta e scaglie di cioccolato',
        price: '5.50',
        image: '/images/cannolo.jpg',
        tags: ['Siciliano']
      }
    ],
    bevande: [
      {
        id: 19,
        name: 'Acqua Minerale',
        description: 'Naturale o frizzante (75cl)',
        price: '2.50',
        image: '/images/acqua.jpg',
        tags: []
      },
      {
        id: 20,
        name: 'Coca Cola',
        description: 'Classica o zero (33cl)',
        price: '3.00',
        image: '/images/coca-cola.jpg',
        tags: []
      },
      {
        id: 21,
        name: 'Birra Artigianale',
        description: 'Birra bionda non filtrata (33cl)',
        price: '5.00',
        image: '/images/birra.jpg',
        tags: ['Artigianale']
      },
      {
        id: 22,
        name: 'Vino della Casa',
        description: 'Rosso o bianco (75cl)',
        price: '12.00',
        image: '/images/vino.jpg',
        tags: ['Locale']
      }
    ]
  };

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="container">
          <h1>Il Nostro <span>Menu</span></h1>
          <p>Scopri le nostre specialità preparate con ingredienti freschi e di qualità</p>
        </div>
      </div>

      <section className="menu-content section">
        <div className="container">
          <div className="menu-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="menu-items">
            {menuItems[activeCategory].map((item) => (
              <div className="menu-item" key={item.id}>
                <div className="menu-item-img">
                  <img src={item.image} alt={item.name} />
                  {item.tags.length > 0 && (
                    <div className="menu-item-tag">
                      {item.tags[0]}
                    </div>
                  )}
                </div>
                <div className="menu-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-item-footer">
                    <span className="menu-item-price">€{item.price}</span>
                    <button className="add-to-cart">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="menu-info section">
        <div className="container">
          <div className="menu-info-grid">
            <div className="menu-info-item">
              <div className="menu-info-icon">
                <i className="fa-solid fa-wheat-awn"></i>
              </div>
              <h3>Impasto a Lunga Lievitazione</h3>
              <p>Il nostro impasto lievita per almeno 24 ore, risultando leggero e digeribile.</p>
            </div>
            <div className="menu-info-item">
              <div className="menu-info-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3>Ingredienti Selezionati</h3>
              <p>Utilizziamo solo prodotti DOP e IGP, selezionati dai migliori produttori italiani.</p>
            </div>
            <div className="menu-info-item">
              <div className="menu-info-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3>Opzioni per Tutti</h3>
              <p>Offriamo opzioni vegetariane, vegane e senza glutine. Chiedi al nostro staff!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-cta">
        <div className="container">
          <div className="menu-cta-content">
            <h2>Prenota un Tavolo o Ordina Online</h2>
            <p>La vera esperienza della pizza italiana ti aspetta</p>
            <div className="menu-cta-buttons">
              <a href="#" className="btn">Ordina Online</a>
              <a href="#" className="btn btn-outline">Prenota un Tavolo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;