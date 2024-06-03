import React from 'react';
import '../styles/Header.css';
import siteLogo from '../assets/images/animation.gif';

function Header() {
    console.log('Header renderizado');
    return (
        <div>
            <header>
                <img src={siteLogo} alt="andarilo" />
                <div id="fontLogo">
                    <h1>Andarilo</h1>
                    <h2>studio</h2>
                </div>
            </header>
            <nav>
                <button>Portfólio</button>
                <button>Quem é esse?</button>
                <button>Contato</button>
            </nav>
        </div>
    );
}

export default Header;