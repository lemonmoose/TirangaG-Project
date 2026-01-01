import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Cost Savings',
      description: 'Reduce electricity bills by up to 80% and enjoy long-term savings with solar panels.'
    },
    {
      id: 2,
      title: 'Environmental Impact',
      description: 'Help fight climate change by using clean, renewable energy and reducing your carbon footprint.'
    },
    {
      id: 3,
      title: 'Energy Independence',
      description: 'Generate your own electricity and reduce dependence on the grid for power needs.'
    },
    {
      id: 4,
      title: 'Increase Property Value',
      description: 'Solar installations significantly increase your home or property\'s market value and appeal.'
    },
    {
      id: 5,
      title: 'Low Maintenance',
      description: 'Solar panels require minimal upkeep with a long warranty period of 25+ years.'
    },
    {
      id: 6,
      title: 'Government Incentives',
      description: 'Take advantage of tax credits, subsidies, and other government rebates available.'
    }
  ];

  return (
    <>
      <Helmet><title>Benefits - Tiranga Green</title></Helmet>
      <div className="page">
        <div className="container">
          <h1>Why Solar Energy?</h1>
          <p className="intro-text">Discover the key benefits of switching to solar energy today</p>
          
          <div className="benefits-grid">
            {benefits.map(benefit => (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-number">{benefit.id}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
