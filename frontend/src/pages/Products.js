import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      category: 'Solar Panels',
      name: 'Monocrystalline Solar Panels',
      efficiency: '20-22%',
      power: '350-400W',
      warranty: '25 years',
      description: 'High-efficiency monocrystalline panels for maximum energy generation in limited space.',
      features: ['High efficiency', 'Durable design', 'Weather resistant', 'Low degradation']
    },
    {
      id: 2,
      category: 'Solar Panels',
      name: 'Polycrystalline Solar Panels',
      efficiency: '15-17%',
      power: '300-350W',
      warranty: '25 years',
      description: 'Cost-effective solar panels suitable for residential and commercial installations.',
      features: ['Affordable', 'Reliable', 'Good performance', 'Easy installation']
    },
    {
      id: 3,
      category: 'Inverters',
      name: 'String Inverters',
      power: '3-10 kW',
      efficiency: '97-98%',
      warranty: '10 years',
      description: 'Perfect for grid-tied systems with excellent performance and reliability.',
      features: ['Grid compatible', 'High efficiency', 'Smart monitoring', 'Compact size']
    },
    {
      id: 4,
      category: 'Inverters',
      name: 'Hybrid Inverters',
      power: '3-10 kW',
      efficiency: '96-97%',
      warranty: '10 years',
      description: 'Advanced inverters with built-in battery management for hybrid systems.',
      features: ['Battery compatible', 'Grid backup', 'Smart control', 'MPPT technology']
    },
    {
      id: 5,
      category: 'Battery Storage',
      name: 'Lithium-Ion Batteries',
      capacity: '5-20 kWh',
      lifespan: '15+ years',
      warranty: '10 years',
      description: 'Long-lasting battery storage for off-grid and hybrid solar systems.',
      features: ['High energy density', 'Fast charging', 'Temperature management', 'Scalable']
    },
    {
      id: 6,
      category: 'Battery Storage',
      name: 'Lead-Acid Batteries',
      capacity: '10-30 kWh',
      lifespan: '5-8 years',
      warranty: '3 years',
      description: 'Economical battery solution for backup and off-grid applications.',
      features: ['Affordable', 'High discharge rate', 'Reliable', 'Easy maintenance']
    }
  ];

  const categories = ['All', 'Solar Panels', 'Inverters', 'Battery Storage'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet><title>Solar Plans - Tiranga Green</title></Helmet>
      <div className="page">
        <div className="container">
          <h1>Solar Plans & Products</h1>
          <p className="intro-text">Choose from our range of solar panels, inverters, and battery storage solutions</p>
          
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p className="category-label">{product.category}</p>
                <p className="description">{product.description}</p>
                
                <div className="specs">
                  {product.power && <div className="spec"><span>Power Output:</span> {product.power}</div>}
                  {product.capacity && <div className="spec"><span>Capacity:</span> {product.capacity}</div>}
                  {product.efficiency && <div className="spec"><span>Efficiency:</span> {product.efficiency}</div>}
                  {product.lifespan && <div className="spec"><span>Lifespan:</span> {product.lifespan}</div>}
                  <div className="spec"><span>Warranty:</span> {product.warranty}</div>
                </div>

                <div className="features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="learn-more-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
