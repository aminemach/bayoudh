import React from 'react';
import Splash from '../components/Splash';
import MasonryGallery from '../components/MasonryGallery';

const About = () => {
  const aboutImages = [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=550&fit=crop",
      alt: "Design Studio",
      title: "Our Design Studio",
      description: "Creative workspace where ideas come to life"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
      alt: "Team Meeting",
      title: "Collaborative Process",
      description: "Working together to create exceptional designs"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=480&fit=crop",
      alt: "Office Space",
      title: "Modern Office",
      description: "Our headquarters designed with the same attention to detail"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=650&fit=crop",
      alt: "Team Discussion",
      title: "Design Philosophy",
      description: "Discussing concepts and bringing visions to reality"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      alt: "Awards",
      title: "Recognition",
      description: "Celebrating our achievements and industry recognition"
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=700&fit=crop",
      alt: "Team Portrait",
      title: "Our Team",
      description: "The passionate professionals behind every project"
    }
  ];

  return (
    <div>
      <Splash 
        title="About" 
        subtitle="Passionate designers dedicated to creating exceptional spaces. Our team combines creativity, expertise, and attention to detail to bring your vision to life."
      />
      <MasonryGallery images={aboutImages} />
    </div>
  );
};

export default About;
