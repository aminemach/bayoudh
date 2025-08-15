import React from 'react';
import Splash from '../components/Splash';
import MasonryGallery from '../components/MasonryGallery';

const InteriorDesign = () => {
  const interiorImages = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop",
      alt: "Modern Living Room",
      title: "Modern Living Space",
      description: "Minimalist design with warm textures and natural light"
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=500&fit=crop",
      alt: "Contemporary Kitchen",
      title: "Contemporary Kitchen",
      description: "Sleek kitchen design with marble countertops and custom cabinetry"
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=650&fit=crop",
      alt: "Luxury Bedroom",
      title: "Master Bedroom Suite",
      description: "Elegant bedroom with custom furniture and ambient lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=550&fit=crop",
      alt: "Dining Room",
      title: "Formal Dining Room",
      description: "Sophisticated dining space with statement lighting and art"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=480&fit=crop",
      alt: "Home Office",
      title: "Executive Home Office",
      description: "Productive workspace with built-in storage and ergonomic design"
    },
    {
      src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=700&fit=crop",
      alt: "Bathroom Design",
      title: "Spa-Like Bathroom",
      description: "Luxurious bathroom with natural stone and modern fixtures"
    }
  ];

  return (
    <div>
      <Splash 
        title="Interior Design" 
        subtitle="Creating beautiful, functional spaces that reflect your personality and lifestyle. From concept to completion, we transform interiors into inspiring environments."
      />
      <MasonryGallery images={interiorImages} />
    </div>
  );
};

export default InteriorDesign;
