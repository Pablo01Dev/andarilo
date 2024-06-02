import React from 'react';
import Cards from '../models/Cards';
import Header from '../models/Header';
import Footer from '../models/Footer';
import Contact from '../models/Contact';
import Nav from '../models/Nav';

function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

