import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

function Card({ fundo, titulo }) {
    return (
        <section>
            <div className="background" style={{ backgroundImage: `url(${fundo})` }}>
                <p>{titulo}</p>
            </div>
        </section>
    );
}

Card.propTypes = {
    fundo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
};

export default Card;
