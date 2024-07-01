import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

function Card({ fundo, titulo, page }) {
    return (
        <div className="baseCard">
            <a href={page}>
                <div className="background" style={{ backgroundImage: `url(${fundo})` }}>
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
};

export default Card;
