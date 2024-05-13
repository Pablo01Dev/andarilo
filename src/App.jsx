import React, { useState } from 'react';
import Header from './models/Header';
import Nav from './models/Nav';
import Portfolio from './models/Portfolio';
import ContactArea from './models/Contato';
import Footer from './models/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Nav />
      <Portfolio />
      <ContactArea />
      <Footer />
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <p>Contagem: {count}</p>
    </div>
  );
}

export default App;
