import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Card.module.css';

function Card({ fundo, titulo, page, onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={styles.baseCard}>
            <a href={page}>
                <div className={styles.background} onClick={handleClick} style={{ backgroundImage: `url(${fundo})` }}>
                    <h1>{titulo}</h1>
                </div>
            </a>
        </div>
    );
}

Card.propTypes = {
    fundo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    onClick: PropTypes.func, // onClick é opcional
};

export default Card;
