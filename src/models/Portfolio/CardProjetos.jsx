import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CardProjetos.css';


function CardProjetos({ fundo, titulo, descricao, onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="baseCardProjetos">
            <a>
                <div className="background" onClick={handleClick} style={{ backgroundImage: `url(${fundo})` }}>
                    <h1>{titulo}</h1>
                </div>
            </a>
        </div>
    );
}

CardProjetos.propTypes = {
    fundo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default CardProjetos;
