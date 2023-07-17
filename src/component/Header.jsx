import React,{ useState } from 'react';
import SharePopup from './SharePopup';

const Header = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShare = () => {
    setIsShareOpen(true);
  };

  const handleCloseShare = () => {
    setIsShareOpen(false);
  };


  return (
    <header style={headerStyle}>
      <div style={leftSideStyle}>
        <h1 style={companyNameStyle}>CollabTalent</h1>
      </div>
      <div style={rightSideStyle}>
        <button style={shareButtonStyle}  onClick={handleShare}>Share</button>
      </div>
      {isShareOpen && (
        <SharePopup url="https://collabtalent-w4e3.vercel.app/" onClose={handleCloseShare} />
      )}
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
};

const leftSideStyle = {
  marginRight: '10px',
};

const rightSideStyle = {
  marginLeft: '10px',
};

const companyNameStyle = {
  margin: 0,
  color:'blue',
  fontSize:'35px'
};

const shareButtonStyle = {
  padding: '8px 20px',
  color: 'white',
  background:'rgb(71, 69, 69)',
  borderRadius: '10px',
  fontSize: '18px',
  cursor: 'pointer',
  border:'none'
};

export default Header;
