import React from 'react';
import Header from '../components/home/Header'; // لاحظ المسار
import Menu from '../components/menu/menu'; // لاحظ المسار
import Footer from '../components/home/footer'; // لاحظ المسار

function Home() {
  return (
    <div>
      <Header />
      <Menu />
  
      <Footer />
    </div>
  );
}

export default Home;