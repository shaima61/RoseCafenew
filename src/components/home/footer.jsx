import React from 'react';

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
            <li>
              <a href="#">
                The Art of Perfect Pastry: Secrets Behind Our Creations
              </a>
            </li>
            <li>
              <a href="#">
                5 Coffee and Pastry Pairings to Brighten Your Day
              </a>
            </li>
            <li>
              <a href="#">
                Behind the Scenes: A Day in the Life of Our Pastry Chefs
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>New Items</h4>
          <ul className="footer__links">
            <li><a href="#">Menu Highlights</a></li>
            <li><a href="#">Daily Specials</a></li>
            <li><a href="#">Customer Testimonials</a></li>
            <li><a href="#">Baking Workshops</a></li>
            <li><a href="#">Blog & Recipe</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Social Media</h4>
          <ul className="footer__links">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2025 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;