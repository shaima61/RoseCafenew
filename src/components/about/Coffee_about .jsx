import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Coffee_about () {


 

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
        
      <div className="about__content ">
        <h2 className="section__header">About Our Pastry World</h2>
        <div>
          <p>
           At PastryWorld, our passion extends beyond pastries to include the art of coffee. We carefully select the finest coffee beans from around the world, handling them with passion and expertise to deliver the perfect cup every time.
          </p>
          <p>
           Every corner of our cafe is designed to be your favorite space, where you can enjoy moments of quiet reflection or share lively conversations with friends. 
          </p>
         
        </div>
      </div>
    <div className="about__image">
        <img src="assets/about2.jfif" alt="about" />
      </div>
    </section>
  );
}

export default Coffee_about ;