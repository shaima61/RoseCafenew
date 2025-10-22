import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="section__container menu__container">
        <h2 className="section__header doz">Popular </h2>
  
        <div className="menu__grid">
          <div className="menu__card">
            <img src="assets/menu-1.jpg" alt="menu" />
            <div className="menu__card__content">
              <h4>Caramel Pecan Cinnamon Roll</h4>
              <h3>$1444.00</h3>
            </div>
          </div>
          <div className="menu__card">
            <img src="assets/menu-2.jpg" alt="menu" />
            <div className="menu__card__content">
              <h4>Chocolate Croissant (Pain au Chocolat)</h4>
              <h3>$24.00</h3>
            </div>
          </div>
          <div className="menu__card">
            <img src="assets/menu-3.jpg" alt="menu" />
            <div className="menu__card__content">
              <h4>Chocolate Fudge Delight</h4>
              <h3>$20.00</h3>
            </div>
          </div>
          <div className="menu__card">
            <img src="assets/menu-4.jpg" alt="menu" />
            <div className="menu__card__content">
              <h4>Triple Layer Chocolate Mousse</h4>
              <h3>$29.00</h3>
            </div>

          </div>
            <div className="menu__card">
            <img src="assets/menu5.jfif" alt="menu" />
            <div className="menu__card__content">
              <h4>Chocolate Fudge Delight</h4>
              <h3>$20.00</h3>
            </div>
          </div>
              <div className="menu__card">
            <img src="assets/menu7.jfif" alt="menu" />
            <div className="menu__card__content">
              <h4>Chocolate Fudge Delight</h4>
              <h3>$20.00</h3>
            </div>
          </div>
              <div className="menu__card">
            <img src="assets/menu6.jpg" alt="menu" />
            <div className="menu__card__content">
              <h4>Chocolate Fudge Delight</h4>
              <h3>$20.00</h3>
            </div>
          </div>
              <div className="menu__card">
            <img src="assets/menu8.jpg" alt="menu" />
            <div className="menu__card__content">
              <h4>Chocolate Fudge Delight</h4>
              <h3>$20.00</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;