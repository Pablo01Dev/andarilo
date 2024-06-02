import React from 'react';
import '../styles/Header.css';
import siteLogo from '../assets/images/animation.gif';
import Nav from './Nav';

function Header() {
    console.log('Header renderizado');
    return (
        <header>
            <img src={siteLogo} alt="andarilo" />
            <div id="fontLogo">
                <h1>Andarilo</h1>
                <h2>studio</h2>
            </div>
        </header>
    );
}

export default Header;