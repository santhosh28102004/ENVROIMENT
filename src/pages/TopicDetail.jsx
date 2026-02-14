import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { environmentalTopics } from '../data';

const TopicDetail = () => {
  const { id } = useParams();
  const topic = environmentalTopics.find((t) => t.id === id);

  if (!topic) return <div className="container">Topic not found</div>;

  return (
    <div className="container">
      <section className="section">
        <Link to="/topics" className="text-link">Back to Topics</Link>
        <div className="topic-hero">
          <img src={topic.detailImage || topic.image} alt={topic.title} />
          <div className="topic-hero-text">
            <p className="eyebrow">Topic Detail</p>
            <h1>{topic.title}</h1>
            <p className="lead">{topic.content.whatItIs}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="detail-grid">
          <div className="info-card">
            <h3>What It Is</h3>
            <p>{topic.content.whatItIs}</p>
          </div>
          <div className="info-card">
            <h3>Causes</h3>
            <ul>
              {topic.content.causes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <h3>Effects</h3>
            <ul>
              {topic.content.effects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <h3>Preventive Measures</h3>
            <ul>
              {topic.content.prevention.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Visual Insights</h2>
          <p>Images paired with context to deepen understanding.</p>
        </div>
        <div className="spotlight-grid">
          {topic.content.spotlights.map((spotlight) => (
            <article key={spotlight.title} className="spotlight-card">
              <img src={spotlight.image} alt={spotlight.title} />
              <div>
                <h3>{spotlight.title}</h3>
                <p>{spotlight.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="cta-row">
          <Link to="/quiz" className="btn-primary">Take the Quiz</Link>
          <Link to="/articles" className="btn-ghost">Read Related Articles</Link>
        </div>
      </section>
    </div>
  );
};

export default TopicDetail;
