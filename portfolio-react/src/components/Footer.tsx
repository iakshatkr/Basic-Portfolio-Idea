import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <small>© <span id="year"></span> All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;