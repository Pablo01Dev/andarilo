import React, { useState } from 'react';
import styles from '../styles/SecondHeader.module.css';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";

function SecondHeader() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.headerBar}>
            <div className={styles.logo}>
                <a href="/">
                    <h1>andarilo.st</h1>
                </a>
            </div>

            <div className={styles.mobileMenu}>
                <button onClick={toggleNav} type='button'>
                    <GiHamburgerMenu className={styles.menuIcon} />
                </button>
            </div>

            <div className={`${styles.nav} ${isActive ? styles.active : ''}`}>
                <a href="/">Home</a>
                <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>

                    <a href="">Contact</a>
                </Link>

            </div>
        </div >
    );
}

export default SecondHeader;
