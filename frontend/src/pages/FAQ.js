import React from 'react';
import { Helmet } from 'react-helmet-async';
import './FAQ.css';

const FAQ = () => {
  // FAQ items data
  const faqItems = [
    {
      id: 1,
      question: 'How much does solar installation cost?',
      answer: 'Average cost ranges from ₹3-5 lakhs for a 5kW system depending on quality and location.'
    },
    {
      id: 2,
      question: 'What is the warranty period?',
      answer: 'Panels typically come with 25 years warranty and inverters with 5-10 years warranty.'
    },
    {
      id: 3,
      question: 'How long does installation take?',
      answer: 'Installation typically takes 2-3 weeks depending on system size and site conditions.'
    },
    {
      id: 4,
      question: 'Can I go off-grid?',
      answer: 'Yes, off-grid systems are available with battery storage for complete energy independence.'
    },
    {
      id: 5,
      question: 'What about government incentives?',
      answer: 'We help you avail government subsidies, tax benefits, and accelerated depreciation schemes.'
    },
    {
      id: 6,
      question: 'What is the maintenance required?',
      answer: 'Solar panels require minimal maintenance - just occasional cleaning for optimal performance.'
    }
  ];

  return (
    <>
      <Helmet><title>FAQ - Tiranga Green</title></Helmet>
      <div className="page">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="faq-container">
            {faqItems.map(item => (
              <div key={item.id} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
