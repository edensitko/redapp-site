'use client';

import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const WhatsAppContainer = () => {
  return (
    <div 
      className="fixed bottom-[100px] left-5 z-[9999]"
      style={{
        position: 'fixed',
        bottom: '100px',
        left: '20px',
        zIndex: 9999
      }}
    >
      <WhatsAppButton />
    </div>
  );
};

export default WhatsAppContainer;
