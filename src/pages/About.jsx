import React from 'react';
import Header from '../components/home/Header'; // لاحظ المسار
import Sweets_about from '../components/about/Sweets_about'; // لاحظ المسار
import Coffee_about  from '../components/about/Coffee_about '; // لاحظ المسار
import Footer from '../components/home/footer'; // لاحظ المسار

function Home() {
  return (
    <div>
      <Header />
      <Sweets_about />
      <Coffee_about  />
   
      
      <Footer />
    </div>
  );
}

export default Home;