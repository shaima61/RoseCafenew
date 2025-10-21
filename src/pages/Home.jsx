import React from 'react';
import Header from '../components/home/Header'; // لاحظ المسار
import Menu from '../components/home/home_menu'; // لاحظ المسار
import Book from '../components/home/home_book'; // لاحظ المسار
import About from '../components/home/home_about'; // لاحظ المسار
import Footer from '../components/home/footer'; // لاحظ المسار

function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <Book />
      <About />
      <Footer />
    </div>
  );
}

export default Home;