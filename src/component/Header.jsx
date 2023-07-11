


import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import Logo from '../assets/logo.png';
import SharePopup from './SharePopup';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShare = () => {
    setIsShareOpen(true);
  };

  const handleCloseShare = () => {
    setIsShareOpen(false);
  };

  return (
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className="header-left">
        <img src={Logo} alt="Logo" />
        <div className="header-beta">
          <button className="header-beta-button">Beta</button>
        </div>
      </div>
      <div className="header-right">
        <button className="header-toggle" onClick={handleToggle}>
          <i className="fas fa-bars"></i>
        </button>
        <div className={`header-links ${isOpen ? 'open' : ''}`} ref={menuRef}>
          <button className="header-button" onClick={handleShare}>
            Share
          </button>
          <button className="header-button">Join Waitlist </button>
        </div>
      </div>
      {isShareOpen && (
        <SharePopup url="https://collabtalent-blue.vercel.app/" onClose={handleCloseShare} />
      )}
    </header>
  );
};

export default Header;








