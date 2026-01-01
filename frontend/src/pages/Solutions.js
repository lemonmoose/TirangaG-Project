import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Solutions.css';
import proj1 from '../assets/proj-1.jpeg';
import proj2 from '../assets/proj-2.jpeg';
import proj3 from '../assets/proj-3.jpeg';
import projWebp from '../assets/proj_1.webp';

const Solutions = () => {
  // Solar solutions data
  const solarSolutions = [
    {
      id: 1,
      title: 'On-Grid Solar',
      description: 'Connected to main grid with net metering benefits',
      image: proj1
    },
    {
      id: 2,
      title: 'Off-Grid Solar',
      description: 'Independent system with battery backup',
      image: proj2
    },
    {
      id: 3,
      title: 'Hybrid Solar',
      description: 'Best of both worlds - grid and battery',
      image: proj3
    },
    {
      id: 4,
      title: 'Rooftop Solar',
      description: 'Perfect for residential and commercial spaces',
      image: projWebp
    }
  ];

  return (
    <>
      <Helmet><title>Solutions - Tiranga Green</title></Helmet>
      <div className="page">
        <div className="container">
          <h1>Our Solutions</h1>
          <div className="solutions-grid">
            {solarSolutions.map(solution => (
              <div key={solution.id} className="solution-card">
                <img src={solution.image} alt={solution.title} className="solution-image" />
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
