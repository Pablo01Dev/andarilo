import React from 'react';
import Header from './models/Header';
import Nav from './models/Nav';
import Portfolio from './models/Portfolio';
import ContactArea from './models/Contato';
import Footer from './models/Footer';

function App() {
    return (
        <div>
            <Header />
            <Nav />
            <Portfolio />
            <ContactArea />
            <Footer />
        </div>
    );
}

export default App;
