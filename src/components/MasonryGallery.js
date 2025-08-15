import React from 'react';
import { motion } from 'framer-motion';
import './MasonryGallery.css';

const MasonryGallery = ({ images }) => {
  return (
    <div className="masonry-gallery">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="masonry-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="masonry-image"
          />
          <div className="masonry-overlay">
            <h3 className="masonry-title">{image.title}</h3>
            <p className="masonry-description">{image.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGallery;
