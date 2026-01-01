import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER || '919876543210';
  const message = 'Hello, I am interested in your solar solutions';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      className="whatsapp-widget"
      onClick={handleClick}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppWidget;
