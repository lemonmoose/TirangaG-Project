import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

// Import images from assets folder
import heroImage from '../assets/hero-bg.jpg';
import teamImage from '../assets/team.jpeg';
import workerImage from '../assets/worker.jpeg';
import worker2Image from '../assets/worker-2.jpeg';

const About = () => {
  // Company values data
  const companyValues = [
    {
      id: 1,
      title: 'Sustainability',
      description: 'We are committed to providing sustainable solar energy solutions that reduce carbon footprint.'
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'We invest in cutting-edge technology to deliver the best solar systems available.'
    },
    {
      id: 3,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We provide excellent service and support.'
    },
    {
      id: 4,
      title: 'Excellence',
      description: 'We maintain the highest standards in quality, safety, and installation.'
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      id: 1,
      point: '10+ Years of Industry Experience'
    },
    {
      id: 2,
      point: '5000+ Satisfied Customers'
    },
    {
      id: 3,
      point: 'Expert Team of Engineers and Technicians'
    },
    {
      id: 4,
      point: 'Premium Quality Solar Panels & Inverters'
    },
    {
      id: 5,
      point: '24/7 Customer Support'
    },
    {
      id: 6,
      point: 'Government Subsidies & Tax Benefits Assistance'
    }
  ];

  // Team stats
  const stats = [
    {
      id: 1,
      number: '10+',
      label: 'Years of Experience'
    },
    {
      id: 2,
      number: '5000+',
      label: 'Happy Customers'
    },
    {
      id: 3,
      number: '50+',
      label: 'Expert Team Members'
    },
    {
      id: 4,
      number: '100+',
      label: 'Projects Completed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Tiranga Green</title>
        <meta name="description" content="Learn about Tiranga Green Energy Solutions - your trusted solar energy provider." />
      </Helmet>
      <div className="page about-page">
        <div className="container">
          {/* Main Heading */}
          <h1>About Tiranga Green Energy Solutions</h1>
          
          {/* Hero Section with Image */}
          <section className="about-hero">
            <div className="hero-image">
              <img src={heroImage} alt="Tiranga Green Solar Solutions" />
            </div>
            <div className="hero-text">
              <h2>Leading Provider of Sustainable Solar Energy</h2>
              <p>
                Tiranga Green Energy Solutions is a pioneering renewable energy company dedicated to transforming 
                the way India harnesses solar power. With over a decade of industry experience, we've successfully 
                installed solar systems for thousands of residential and commercial properties across the nation.
              </p>
              <p>
                Our mission is to make clean, sustainable energy accessible to everyone while maximizing their 
                savings and environmental impact. We believe in innovation, quality, and customer-centric service.
              </p>
            </div>
          </section>

          {/* Company Values Section */}
          <section className="company-values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              {companyValues.map(value => (
                <div key={value.id} className="value-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="why-choose-us">
            <h2>Why Choose Tiranga Green?</h2>
            <div className="why-grid">
              {whyChooseUs.map(item => (
                <div key={item.id} className="why-item">
                  <span className="checkmark">✓</span>
                  <p>{item.point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2>Our Expert Team</h2>
            <div className="team-content">
              <div className="team-info">
                <p>
                  Our team consists of experienced engineers, technicians, and solar energy consultants 
                  who are passionate about renewable energy. Each member undergoes rigorous training to ensure 
                  the highest quality of service delivery.
                </p>
                <p>
                  We pride ourselves on our professionalism, technical expertise, and customer-first approach. 
                  Whether you're looking for a small residential installation or a large commercial project, 
                  our team has the knowledge and skills to deliver exceptional results.
                </p>
              </div>
              <div className="team-images">
                <img src={teamImage} alt="Tiranga Green Team" className="team-img-main" />
                <div className="team-img-secondary">
                  <img src={workerImage} alt="Solar Installation Expert" />
                  <img src={worker2Image} alt="Solar Installation Worker" />
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="stats-section">
            <h2>By The Numbers</h2>
            <div className="stats-grid">
              {stats.map(stat => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To provide affordable, reliable, and sustainable solar energy solutions that empower 
                individuals and businesses to achieve energy independence while reducing their environmental footprint.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To be India's most trusted solar energy provider, revolutionizing the renewable energy landscape 
                and creating a sustainable future for generations to come.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="about-cta">
            <h2>Ready to Go Solar with Tiranga Green?</h2>
            <button className="cta-btn">Get Started</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
