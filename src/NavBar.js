import React, { useState } from 'react';

const NavBar = () => {
  const [show, setShow] = useState(true);

  const toggleFunction = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <nav className="navigation-container">
      <div className="toggle" onClick={toggleFunction}>
        <img src="./img/descending_bars.png" alt="toggle" id="toggle-img" />
      </div>

      {/* Mobile Links */}
      <ul className="mobile-nav-links-container">
        <li>
          <a href="#home" className="home">Home</a>
        </li>
        <li>
          <a href="/mission.html" className="mission">Our Mission</a>
        </li>
        <li>
          <a href="./team.html" className="our-team">Our Team</a>
        </li>
        <li>
          <a href="/contact.html" className="contact">Contact Us</a>
        </li>
      </ul>

      {/* Desktop Links */}
      <ul className="nav-links-container">
        <li>
          <a href="#home" className="home">Home</a>
        </li>
        <li>
          <a href="/mission.html" className="mission">Our Mission</a>
        </li>
        <li>
          <div className="spin-logo-container">
            <a href="#home" className="logo">
              <img src="./img/chakra.png" className="spin-logo" alt="logo of meditation" />
            </a>
          </div>
        </li>
        <li>
          <a href="./team.html" className="our-team">Our Team</a>
        </li>
        <li>
          <a href="/contact.html" className="contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
