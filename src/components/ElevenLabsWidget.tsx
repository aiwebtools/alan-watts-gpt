
import React, { useEffect } from 'react';
import './ElevenLabsWidget.css';

const ElevenLabsWidget = () => {
  useEffect(() => {
    // Initialize ElevenLabs widget with API key
    if (window.ElevenLabsConvai) {
      window.ElevenLabsConvai.init({
        apiKey: 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2'
      });
      console.log('ElevenLabs widget initialized');
    } else {
      // If the widget isn't loaded yet, wait for it
      window.addEventListener('elevenlabs-convai-loaded', () => {
        window.ElevenLabsConvai.init({
          apiKey: 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2'
        });
        console.log('ElevenLabs widget initialized after load');
      });
    }
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default ElevenLabsWidget;
