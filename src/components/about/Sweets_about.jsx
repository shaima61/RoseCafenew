import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Sweets_about() {


 

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    
    // تطبيق ScrollReveal على عناصر الهيدر فقط
    
    ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "right" });
    ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".about__content > div", { ...scrollRevealOption, delay: 1000 });
  }, []);



  return (
  <section className="section__container about__container" id="about">
      <div className="about__image">
        <img src="assets/about.png" alt="about" />
      </div>
      <div className="about__content">
        <h2 className="section__header">About Our Pastry World</h2>
        <div>
          <p>
            Welcome to PastryWorld, where every pastry tells a story of passion,
            flavor, and quality. Our journey began with a simple mission: to
            create a haven for pastry and coffee lovers. Using only the finest
            ingredients, our skilled bakers craft delightful pastries that
            satisfy your sweet cravings and bring a smile to your day.
          </p>
          <p>
            At PastryWorld, we believe in making every moment special, whether
            it's a morning coffee break or a cozy gathering with friends.
          </p>
    
        </div>
      </div>
    </section>
  );
}

export default Sweets_about;