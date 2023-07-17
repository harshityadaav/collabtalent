import React, { useState } from 'react';
import './SharePopup.css'; // CSS file for styling the popup

const SharePopup = ({ url, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleShare = () => {
    if (selectedPlatform) {
      // Handle the share action for the selected platform
      switch (selectedPlatform) {
        case 'facebook':
          shareOnPlatform(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
          break;
        case 'twitter':
          shareOnPlatform(`https://twitter.com/intent/tweet?url=${url}`);
          break;
        case 'linkedin':
          shareOnPlatform(`https://www.linkedin.com/shareArticle?url=${url}`);
          break;
        case 'whatsapp':
          shareOnPlatform(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`);
          break;
        case 'instagram':
          shareOnPlatform(`https://www.instagram.com/share?url=${encodeURIComponent(url)}`);
          break;
        // Add more social media platforms as needed
        default:
          break;
      }
    }
  };

  const shareOnPlatform = (platformUrl) => {
    window.open(platformUrl, '_blank');
  };

  return (
    <div className="share-popup-overlay">
      <div className="share-popup-content">
        <h1>Share platform link with your friends</h1>
        <button
          className={`share-platform-button ${
            selectedPlatform === 'facebook' ? 'selected' : ''
          }`}
          onClick={() => handlePlatformClick('facebook')}
        >
          Facebook
        </button>
        <button
          className={`share-platform-button ${
            selectedPlatform === 'twitter' ? 'selected' : ''
          }`}
          onClick={() => handlePlatformClick('twitter')}
        >
          Twitter
        </button>
        <button
          className={`share-platform-button ${
            selectedPlatform === 'linkedin' ? 'selected' : ''
          }`}
          onClick={() => handlePlatformClick('linkedin')}
        >
          LinkedIn
        </button>
        <button
          className={`share-platform-button ${
            selectedPlatform === 'whatsapp' ? 'selected' : ''
          }`}
          onClick={() => handlePlatformClick('whatsapp')}
        >
          WhatsApp
        </button>
        <button
          className={`share-platform-button ${
            selectedPlatform === 'instagram' ? 'selected' : ''
          }`}
          onClick={() => handlePlatformClick('instagram')}
        >
          Instagram
        </button>
        {/* Add more social media platforms as needed */}
        <button className="share-button" onClick={handleShare}>
          Share
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SharePopup;
