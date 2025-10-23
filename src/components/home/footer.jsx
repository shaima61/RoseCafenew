import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <a href="#" className="footer__logo">
            <img src="assets/logo.png" alt="logo" />
          </a>
        </div>
        <div className="footer__col">
          <h4>Blogs</h4>
          <ul className="footer__links">
           
             <li><Link to="/menu">
             5 Coffee and Pastry Pairings to Brighten Your Day
</Link></li>
          <li><Link to="/about">Behind the Scenes: A Day in the Life of Our Pastry Chefs

           </Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/menu">Menu</Link></li>
       <li><Link to="/about"> About </Link></li>
       <li><Link to="/login"> Login </Link></li>
       <li><Link to="/register"> Register </Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Social Media</h4>
          <ul className="footer__links">
          <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
  <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
  <li><a href="https://youtube.com" target="_blank">Youtube</a></li>
  <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2025 cybersecurity. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;