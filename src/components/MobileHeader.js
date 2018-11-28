import React from 'react';
import Logo from '../assets/Logo.png';
import HamburgerMenu from './HamburgerMenu';

const MobileHeader = () => {
  return (
    <div className="mobile-header">
        <span className="mobile-logo">
          <a href="">
            <img src={Logo} alt="byrdmr logo" />
          </a>
        </span>
        <span className="menu-icon">
          <HamburgerMenu />
        </span>
    </div>
  );
}

export default MobileHeader;
