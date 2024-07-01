import React, { useState } from 'react';
import '../styles/SecondHeader.css';
import { Link } from 'react-scroll';
import { FaHamburger } from "react-icons/fa";

function SecondHeader() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='HeaderBar'>
            <div className='Logo'>
                <a href="/">
                    <h1>andarilo.st</h1>
                </a>
            </div>

            <div className='mobile-menu'>
                <button onClick={toggleNav} type='button'>
                    <FaHamburger />
                </button>
            </div>

            <div className={`Nav ${isActive ? 'active' : ''}`}>
                <a href="/">Home</a>
                <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>

                <a href="">Contact</a>    
                </Link>

            </div>
        </div >
    );
}

export default SecondHeader;
