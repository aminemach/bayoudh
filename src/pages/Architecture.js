import React from 'react';
import Splash from '../components/Splash';
import MasonryGallery from '../components/MasonryGallery';

const Architecture = () => {
  const architectureImages = [
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=400&fit=crop",
      alt: "Modern Building",
      title: "Modern Office Complex",
      description: "Contemporary design with glass facades and sustainable features"
    },
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=350&fit=crop",
      alt: "Residential Architecture",
      title: "Luxury Residence",
      description: "Minimalist home design with open spaces and natural light"
    },
    {
      src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=300&h=450&fit=crop",
      alt: "Contemporary Villa",
      title: "Contemporary Villa",
      description: "Modern residential design with clean lines and natural materials"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=380&fit=crop",
      alt: "Skyscraper",
      title: "Corporate Tower",
      description: "High-rise building with innovative structural engineering"
    },
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=320&fit=crop",
      alt: "Sustainable Building",
      title: "Eco-Friendly Design",
      description: "Green building with renewable energy and sustainable materials"
    },
    {
      src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=300&h=360&fit=crop",
      alt: "Urban Development",
      title: "Mixed-Use Complex",
      description: "Urban development integrating commercial and residential spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&h=440&fit=crop",
      alt: "Glass Building",
      title: "Glass Pavilion",
      description: "Transparent architecture with innovative glass technology"
    },
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=380&fit=crop",
      alt: "Modern House",
      title: "Minimalist Home",
      description: "Clean geometric forms with natural material integration"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=500&fit=crop",
      alt: "Apartment Building",
      title: "Residential Tower",
      description: "High-density living with sustainable design principles"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=340&fit=crop",
      alt: "Commercial Building",
      title: "Business Center",
      description: "Modern commercial architecture with flexible spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=300&h=390&fit=crop",
      alt: "Steel Frame",
      title: "Industrial Architecture",
      description: "Exposed steel structure with modern industrial aesthetic"
    },
    {
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=300&h=350&fit=crop",
      alt: "School Building",
      title: "Educational Facility",
      description: "Learning environment designed for student engagement"
    },

  ];

  return (
    <div>
      <Splash 
        title="Architecture" 
        subtitle="Designing innovative structures that blend form and function. Our architectural vision creates spaces that inspire and endure through thoughtful design and sustainable practices."
      />
      <MasonryGallery images={architectureImages} />
    </div>
  );
};

export default Architecture;
