import React, { useMemo, useState } from 'react';
import { articles } from '../data';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'water', label: 'Water' },
  { id: 'air', label: 'Air' },
  { id: 'forest', label: 'Forest' },
  { id: 'energy', label: 'Energy' }
];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container">
      <section className="section">
        <div className="section-header">
          <h2>Articles</h2>
          <p>Deep dives into the science, solutions, and stories behind environmental action.</p>
        </div>

        <div className="filter-bar">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={activeCategory === category.id ? 'filter-pill active' : 'filter-pill'}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="article-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} className="article-card">
              <img src={article.image} alt={article.title} />
              <div>
                <p className="pill">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <button className="btn-ghost" type="button">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;
