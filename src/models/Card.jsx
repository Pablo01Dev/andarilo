import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

function Card({ fundo, titulo, page, onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="baseCard">
            <a href={page}>
                <div className="background" onClick={handleClick} style={{ backgroundImage: `url(${fundo})` }}>
                    <p>{titulo}</p>
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
