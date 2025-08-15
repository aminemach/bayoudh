import React from 'react';
import { motion } from 'framer-motion';
import './LoadingSplash.css';

const LoadingSplash = ({ onComplete }) => {
  return (
    <motion.div 
      className="loading-splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="splash-logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        <motion.span
          className="logo-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6
          }}
        >
          Bayoudh.
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingSplash;
