import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaStar, FaLeaf, FaBolt, FaGift, FaChartLine } from 'react-icons/fa';
import './Home.css';

// Import images from assets folder
import heroBackgroundImage from '../assets/hero-bg.jpg';
import projectImage1 from '../assets/proj-1.jpeg';
import projectImage2 from '../assets/proj-2.jpeg';
import projectImage3 from '../assets/proj-3.jpeg';

const Home = () => {

  // Featured projects data for easy maintenance
  const featuredProjects = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      capacity: '5 kW system',
      savings: '₹3.5L Savings',
      image: projectImage1,
      alt: 'Residential Solar Installation'
    },
    {
      id: 2,
      title: 'Commercial Solar Installation',
      capacity: '10 kW system',
      savings: '₹7L Savings',
      image: projectImage2,
      alt: 'Commercial Solar Installation'
    },
    {
      id: 3,
      title: 'Industrial Solar Solution',
      capacity: '50 kW system',
      savings: '₹35L Savings',
      image: projectImage3,
      alt: 'Industrial Solar Solution'
    }
  ];

  // Client testimonials data
  const clientTestimonials = [
    {
      id: 1,
      rating: 5,
      message: 'Excellent service! Our solar installation was completed on time and we\'re saving ₹5000/month on electricity bills.',
      author: 'Rajesh Kumar - Delhi'
    },
    {
      id: 2,
      rating: 5,
      message: 'Professional team, transparent pricing, and amazing results. Highly recommended for anyone thinking about solar!',
      author: 'Priya Sharma - Bangalore'
    },
    {
      id: 3,
      rating: 5,
      message: 'Best investment I made. The ROI was faster than expected and customer support is top-notch.',
      author: 'Amit Patel - Mumbai'
    }
  ];

  // Solar benefits data
  const solarBenefits = [
    {
      id: 1,
      icon: <FaChartLine />,
      title: 'Save Money',
      description: 'Reduce your electricity bills by up to 80%'
    },
    {
      id: 2,
      icon: <FaLeaf />,
      title: 'Environmental Impact',
      description: 'Reduce your carbon footprint significantly'
    },
    {
      id: 3,
      icon: <FaBolt />,
      title: 'Reliable Energy',
      description: '25-30 years warranty on panels'
    },
    {
      id: 4,
      icon: <FaGift />,
      title: 'Government Incentives',
      description: 'Avail government subsidies and tax benefits'
    }
  ];

  /**
   * Renders a star rating component
   * @param {number} rating - Number of stars to display
   * @returns {JSX.Element} Star rating element
   */
  const renderStarRating = (rating) => (
    <div className="stars">
      {[...Array(rating)].map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Tiranga Green - Solar Energy Solutions</title>
        <meta name="description" content="Expert solar energy solutions for residential and commercial properties." />
        <meta name="keywords" content="solar energy, solar panels, renewable energy" />
        <meta property="og:title" content="Tiranga Green - Solar Energy Solutions" />
        <meta property="og:description" content="Expert solar energy solutions" />
      </Helmet>

      <div className="home-page">
        {/* Hero Section with Background Image */}
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),  url(${heroBackgroundImage})` }}>
          <div className="container">
            <div className="hero-content">
              <h1>Powering Your Future with Solar Energy</h1>
              <p>Expert solar energy solutions for residential and commercial properties. Save money while saving the planet.</p>
              <button className="cta-btn">Get Free Consultation</button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section with Images */}
        <section className="featured-projects">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {featuredProjects.map(project => (
                <div key={project.id} className="project-card">
                  <img 
                    src={project.image} 
                    alt={project.alt} 
                    className="project-image"
                  />
                  <h3>{project.title}</h3>
                  <p>{project.capacity} | {project.savings}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="testimonials">
          <div className="container">
            <h2>Client Testimonials</h2>
            <div className="testimonials-grid">
              {clientTestimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-card">
                  {renderStarRating(testimonial.rating)}
                  <p>"{testimonial.message}"</p>
                  <h4>{testimonial.author}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Solar Benefits Section */}
        <section className="why-solar">
          <div className="container">
            <h2>Why Choose Solar Energy?</h2>
            <div className="benefits-grid">
              {solarBenefits.map(benefit => (
                <div key={benefit.id} className="benefit-card">
                  <div className="icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Go Solar?</h2>
            <p>Get a free consultation from our solar experts today!</p>
            <button className="cta-btn">Schedule Consultation</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
