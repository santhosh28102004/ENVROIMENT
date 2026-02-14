import React from 'react';
import { Link } from 'react-router-dom';

const focusSections = [
  {
    title: 'Environmental Awareness',
    items: [
      'Climate change and global warming',
      'Pollution (air, water, soil, noise)',
      'Deforestation and loss of biodiversity',
      'Ozone layer depletion',
      'Waste management (solid waste, e-waste, plastic)'
    ]
  },
  {
    title: 'Sustainability and Green Living',
    items: [
      'Reduce, Reuse, Recycle (3R/5R)',
      'Sustainable lifestyle practices',
      'Eco-friendly products',
      'Water conservation',
      'Energy conservation'
    ]
  },
  {
    title: 'Renewable Energy',
    items: [
      'Solar, wind, hydro, and biogas energy',
      'Benefits of renewable energy',
      'Reducing carbon footprint',
      'Electric vehicles and green transport'
    ]
  },
  {
    title: 'Climate Action and Policies',
    items: [
      'Impacts of climate change',
      'Government environmental policies',
      'International agreements (Paris Agreement, SDGs)',
      'Role of NGOs and communities'
    ]
  }
];

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Environmental Awareness Platform</p>
          <h1>Environmental Awareness Platform</h1>
          <p className="tagline">Protect Our Planet</p>
          <p className="lead">
            Environmental Awareness Platform - Protect Our Planet. Learn how environmental
            issues affect everyday life and explore practical ways to build a cleaner, healthier future.
          </p>
          <div className="hero-actions">
            <Link to="/topics" className="btn-primary">Explore Topics</Link>
            <Link to="/articles" className="btn-ghost">Read Articles</Link>
          </div>
        </div>
        <div className="hero-media">
          <div className="contrast-grid">
            <div className="contrast-card">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=900"
                alt="Lush green forest"
              />
              <span>Healthy ecosystems</span>
            </div>
            <div className="contrast-card">
              <img
                src="https://img.freepik.com/premium-photo/photo-environment-pollution_731790-131799.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Industrial smoke and pollution"
              />
              <span>Polluted environments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Key Focus Areas</h2>
          <p>Explore topics that connect science, policy, and everyday actions.</p>
        </div>
        <div className="card-grid">
          {focusSections.map((section) => (
            <article key={section.title} className="info-card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
