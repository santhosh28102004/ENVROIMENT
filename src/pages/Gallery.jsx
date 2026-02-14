import React from 'react';
import { galleryImages } from '../data';

const Gallery = () => {
  return (
    <div className="container">
      <section className="section">
        <div className="section-header">
          <h2>Image Gallery</h2>
          <p>Real-world visuals that show the impact of environmental issues.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <figure key={img.title} className="gallery-card">
              <img src={img.url} alt={img.title} />
              <figcaption>
                <h3>{img.title}</h3>
                <p>{img.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
