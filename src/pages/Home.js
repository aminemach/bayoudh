import React from 'react';
import Hero from '../layouts/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Our Portfolio</h1>
        <p>Discover our architectural and interior design projects</p>
      </section>
    </div>
  );
};

export default Home;
