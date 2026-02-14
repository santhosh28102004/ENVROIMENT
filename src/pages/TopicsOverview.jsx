import React from 'react';
import { Link } from 'react-router-dom';
import { environmentalTopics } from '../data';

const TopicsOverview = () => {
  return (
    <div className="container">
      <section className="section">
        <div className="section-header">
          <h2>Topics Overview</h2>
          <p>Browse the full set of environmental issues and solutions.</p>
        </div>
        <div className="topic-grid">
          {environmentalTopics.map((topic) => (
            <article key={topic.id} className="topic-card">
              <img src={topic.image} alt={topic.title} />
              <div className="topic-card-body">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <Link to={`/topics/${topic.id}`} className="btn-primary">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopicsOverview;
