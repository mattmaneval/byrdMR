import React from 'react';
import Logo from '../assets/Logo.png';
import MobileHeader from './MobileHeader';

const Header = () => {
  return (
    <div>
    <div className="header">
      <header>
        <nav>
          <ul className="left-links">
            <li><a title="View store" href="">Store</a></li>
            <li><a title="View tuturials" href="">Tutorials</a></li>
          </ul>
          <span className="logo">
            <a href="">
              <img src={Logo} alt="byrdmr logo" />
            </a>
          </span>
          <ul className="right-links">
            <li><a title="View blog" href="">Blog</a></li>
            <li><a title="Contact byrdmr" href="">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
    <div className="responsive-header">
      <MobileHeader />
    </div>
    </div>

  );
}

export default Header;
