import React, { useState } from 'react';
import '../styles/SecondHeader.css';
import { Link } from 'react-scroll';
import { FiMenu } from "react-icons/fi";

function SecondHeader() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='HeaderBar'>
            <div className='Logo'>
                <a href="https://pablo01dev.github.io/andarilo/">
                    <h1>andarilo.st</h1>
                </a>
            </div>

            <div className='mobile-menu'>
                <button onClick={toggleNav} type='button'>
                    <FiMenu />
                </button>
            </div>

            <div className={`Nav ${isActive ? 'active' : ''}`}>
                <a href="https://pablo01dev.github.io/andarilo/">Home</a>
                <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>

                <a href="">Contact</a>    
                </Link>

            </div>
        </div >
    );
}

export default SecondHeader;
