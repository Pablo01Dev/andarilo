import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <img src="/src/assets/images/animation.gif" alt="andarilo" />
            <div id="fontLogo">
                <h1>Andarilo</h1>
                <h2>studio</h2>
            </div>
        </header>
    );
}

export default Header;