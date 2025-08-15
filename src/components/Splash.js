import React from 'react';
import { motion } from 'framer-motion';
import './Splash.css';

const Splash = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="splash-title"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="splash-subtitle"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        className="splash-line"
        initial={{ width: 0 }}
        animate={{ width: '100px' }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </motion.div>
  );
};

export default Splash;
