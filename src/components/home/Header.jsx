import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    
    // تطبيق ScrollReveal على عناصر الهيدر فقط
    ScrollReveal().reveal(".header__container h1", scrollRevealOption);
    ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1000 });
  }, []);

  return (
    <header className="main-header">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src="assets/logo.png" alt="logo" />
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
          </div>
        </div>
        <ul className={`nav__links ${isMenuOpen ? "open" : ""}`} id="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
<li><Link to="/about"> about </Link></li>
<li><Link to="/login"> login </Link></li>
<li><Link to="/register"> registerr </Link></li>
        </ul>
      </nav>

      <div className="section__container header__container" id="home">
        <h1>Good Pastry & Coffee For a  Day</h1>
        <p>
          Start your day on a delightful note with our freshly baked pastries
          and premium coffee. At PastryWorld, we believe in crafting moments of
          joy with every bite and sip.
        </p>
        <div className="header__btns">
          <button className="btn">Let's Eat</button>
          <button className="btn">Book a Table</button>
        </div>
      </div>
    </header>
  );
}

export default Header;