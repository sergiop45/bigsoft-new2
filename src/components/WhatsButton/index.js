import React from 'react';
import whats from './whats-icon.png';
import './whatsbutton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Redirecionar para o WhatsApp
    window.location.href = 'https://api.whatsapp.com/send?phone=5541992784730';
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <img src={whats} alt="WhatsApp" />
    </button>
  );
};

export default WhatsAppButton;
