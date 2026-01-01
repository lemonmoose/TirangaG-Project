import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! How can we help you today?' }
  ]);

  const faqs = {
    'solar-cost': 'How much does solar installation cost?',
    'savings': 'How much can I save with solar?',
    'warranty': 'What is the warranty period?',
    'time': 'How long does installation take?'
  };

  const handleFAQClick = (answer) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, type: 'user', text: answer },
      { id: messages.length + 2, type: 'bot', text: 'Thanks for your interest! Please visit our FAQ page or contact us for more details.' }
    ]);
  };

  return (
    <>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us"
      >
        <FaComments />
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>Chat Bot</h4>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-options">
            {Object.entries(faqs).map(([key, value]) => (
              <button 
                key={key}
                onClick={() => handleFAQClick(value)}
                className="faq-btn"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
