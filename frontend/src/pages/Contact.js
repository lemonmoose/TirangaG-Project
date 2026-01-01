import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLightbulb, FaCheckCircle, FaRobot } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  // Initial form state
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [detectedType, setDetectedType] = useState('general');
  const [responseTime, setResponseTime] = useState('');
  const [aiHint, setAiHint] = useState('');

  // Enquiry type options
  const enquiryTypes = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'solar-panel', label: 'Solar Panels' },
    { value: 'rooftop-solar', label: 'Rooftop Solar' },
    { value: 'on-grid', label: 'On-Grid System' },
    { value: 'off-grid', label: 'Off-Grid System' },
    { value: 'hybrid', label: 'Hybrid System' }
  ];

  // Contact information details
  const contactDetails = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: 'Tiranga Green Energy Solutions',
      subContent: 'Your City, Country'
    },
    {
      id: 2,
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 9876543210'
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@tirangagreen.com'
    },
    {
      id: 4,
      icon: <FaClock />,
      title: 'Business Hours',
      content: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      subContent: 'Sunday: Closed'
    }
  ];

  /**
   * AI-powered message analysis for suggestions and inquiry type detection
   * @param {string} message - The user's message
   */
  const analyzeMessage = (message) => {
    const lowerMessage = message.toLowerCase();
    let detected = 'general';
    const newSuggestions = [];

    // Keywords mapping for inquiry type detection
    const typeKeywords = {
      'solar-panel': ['panel', 'panels', 'pv', 'photovoltaic', 'install'],
      'rooftop-solar': ['roof', 'rooftop', 'residential'],
      'on-grid': ['on-grid', 'grid-tied', 'connected', 'utility'],
      'off-grid': ['off-grid', 'standalone', 'battery', 'no power'],
      'hybrid': ['hybrid', 'both', 'backup']
    };

    // Detect inquiry type
    for (const [type, keywords] of Object.entries(typeKeywords)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        detected = type;
        break;
      }
    }

    setDetectedType(detected);

    // Generate AI suggestions based on message
    if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      newSuggestions.push('💡 Would you like to know about financing options?');
    }
    if (lowerMessage.includes('how long') || lowerMessage.includes('time')) {
      newSuggestions.push('💡 We typically complete installations in 5-7 days');
    }
    if (lowerMessage.includes('save') || lowerMessage.includes('savings')) {
      newSuggestions.push('💡 Most customers save 50-80% on electricity bills');
    }
    if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
      newSuggestions.push('💡 We offer 25-year warranty on panels');
    }
    if (lowerMessage.includes('subsidy') || lowerMessage.includes('incentive')) {
      newSuggestions.push('💡 Government subsidies available - up to 40% discount');
    }

    setSuggestions(newSuggestions.slice(0, 3));

    // Set AI hints for form completion
    if (!message) {
      setAiHint('');
    } else if (message.length < 10) {
      setAiHint('✏️ Please provide more details for better assistance');
    } else {
      setAiHint('✅ Message looks good!');
    }

    // Estimate response time
    const timeEstimates = {
      'solar-panel': '2-4 hours',
      'rooftop-solar': '2-4 hours',
      'on-grid': '1-2 hours',
      'off-grid': '4-6 hours',
      'hybrid': '4-6 hours',
      'general': '2-4 hours'
    };
    setResponseTime(timeEstimates[detected]);
  };

  /**
   * Handles form input changes
   * @param {Event} event - The input change event
   */
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Analyze message in real-time for AI suggestions
    if (name === 'message') {
      analyzeMessage(value);
    }
  };

  /**
   * Handles form submission
   * @param {Event} event - The form submission event
   */
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit enquiry to backend API
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/enquiries`,
        formData
      );
      
      // Show success message
      setSubmitMessage('Thank you! We will contact you soon.');
      
      // Reset form to initial state
      setFormData(initialFormState);
    } catch (error) {
      // Show error message
      setSubmitMessage('Error submitting form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Tiranga Green</title>
        <meta name="description" content="Get in touch with Tiranga Green for solar energy solutions" />
      </Helmet>
      
      <div className="page contact-page">
        <div className="container">
          <h1>Contact Us</h1>
          
          <div className="contact-grid">
            {/* Contact Form Section */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              
              {/* AI Assistant Info */}
              <div className="ai-info-box">
                <FaRobot className="ai-icon" />
                <div>
                  <p><strong>AI Assistant Active</strong></p>
                  <p>Estimated response time: <strong>{responseTime || '2-4 hours'}</strong></p>
                </div>
              </div>

              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
                <select
                  name="type"
                  value={detectedType || formData.type}
                  onChange={handleFormChange}
                >
                  {enquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="5"
                  required
                />
                
                {/* AI Suggestions */}
                {aiHint && (
                  <div className={`ai-hint ${aiHint.includes('✅') ? 'success' : 'info'}`}>
                    {aiHint}
                  </div>
                )}
                
                {suggestions.length > 0 && (
                  <div className="ai-suggestions">
                    <FaLightbulb className="suggestion-icon" />
                    <div className="suggestions-list">
                      {suggestions.map((suggestion, index) => (
                        <p key={index}>{suggestion}</p>
                      ))}
                    </div>
                  </div>
                )}
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
              {submitMessage && <p className="form-message">{submitMessage}</p>}
            </div>

            {/* Contact Information Section */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              {contactDetails.map(detail => (
                <div key={detail.id} className="info-item">
                  <h4><span className="info-icon">{detail.icon}</span> {detail.title}</h4>
                  <p>
                    {detail.content}
                    {detail.subContent && <><br />{detail.subContent}</> }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
