import React from 'react';
import Cards from '../models/Cards';
import Header from '../models/Header';
import Footer from '../models/Footer';
import Contact from '../models/Contact';
import Nav from '../models/Nav';
import QuemSomos from '../models/QuemSomos';

function Home() {
  return (
    <div>
      <Header />
      <Cards />
      <QuemSomos />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

