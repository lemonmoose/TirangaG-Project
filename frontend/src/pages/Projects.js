import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css';
import proj1 from '../assets/proj-1.jpeg';
import proj2 from '../assets/proj-2.jpeg';
import proj3 from '../assets/proj-3.jpeg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Residential Solar Installation - Delhi',
      image: proj1,
      capacity: '5 kW',
      location: 'Delhi',
      type: 'On-Grid',
      savings: '₹80,000/year',
      status: 'Completed',
      description: 'A complete solar installation for a residential property in Delhi with net metering benefits.'
    },
    {
      id: 2,
      title: 'Commercial Solar System - Bangalore',
      image: proj2,
      capacity: '25 kW',
      location: 'Bangalore',
      type: 'Hybrid',
      savings: '₹5,00,000/year',
      status: 'Completed',
      description: 'Large-scale commercial installation with battery backup system for continuous power.'
    },
    {
      id: 3,
      title: 'Industrial Solar Plant - Mumbai',
      image: proj3,
      capacity: '50 kW',
      location: 'Mumbai',
      type: 'Off-Grid',
      savings: '₹10,00,000/year',
      status: 'Completed',
      description: 'Industrial-grade off-grid solar system with advanced monitoring and battery storage.'
    },
    {
      id: 4,
      title: 'Rooftop Solar - Pune',
      image: proj1,
      capacity: '10 kW',
      location: 'Pune',
      type: 'On-Grid',
      savings: '₹1,50,000/year',
      status: 'Completed',
      description: 'Multi-story building rooftop solar installation with distributed inverter system.'
    },
    {
      id: 5,
      title: 'Farm Solar Installation - Jaipur',
      image: proj2,
      capacity: '30 kW',
      location: 'Jaipur',
      type: 'Hybrid',
      savings: '₹7,50,000/year',
      status: 'Completed',
      description: 'Agricultural solar system powering irrigation pumps and farm operations.'
    },
    {
      id: 6,
      title: 'Community Solar Project - Hyderabad',
      image: proj3,
      capacity: '40 kW',
      location: 'Hyderabad',
      type: 'On-Grid',
      savings: '₹8,00,000/year',
      status: 'Completed',
      description: 'Community-based solar project benefiting multiple households with shared benefits.'
    }
  ];

  return (
    <>
      <Helmet><title>Projects - Tiranga Green</title></Helmet>
      <div className="page">
        <div className="container">
          <h1>Our Projects</h1>
          <p className="intro-text">View our successful solar installations and case studies across India</p>

          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="project-status">{project.status}</span>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-details">
                    <div className="detail">
                      <span className="detail-label">Capacity:</span>
                      <span className="detail-value">{project.capacity}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Type:</span>
                      <span className="detail-value">{project.type}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{project.location}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Annual Savings:</span>
                      <span className="detail-value">{project.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
