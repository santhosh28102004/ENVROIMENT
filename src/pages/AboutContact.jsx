import React from 'react';

const AboutContact = () => {
  return (
    <div className="container">
      <section className="section">
        <div className="section-header">
          <h2>About the Platform</h2>
          <p>We connect knowledge with action to protect our shared environment.</p>
        </div>
        <div className="two-col">
          <article className="info-card">
            <h3>Purpose</h3>
            <p>
              The Environmental Awareness Platform brings together essential topics, practical
              tools, and inspiring stories to help people understand environmental challenges
              and take meaningful action.
            </p>
          </article>
          <article className="info-card">
            <h3>Why Awareness Matters</h3>
            <p>
              When people understand the causes and effects of pollution, climate change, and
              biodiversity loss, they can make better choices at home, in school, and at work.
              Awareness accelerates policy support, innovation, and community-led solutions.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Share ideas, ask questions, or suggest a new topic for the platform.</p>
        </div>
        <p className="lead">Email: contact@ecoaware.org</p>
        <form className="contact-form">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell us how we can help" />
          </label>
          <button className="btn-primary" type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default AboutContact;
