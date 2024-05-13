import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faBehance } from '@fortawesome/free-brands-svg-icons';

function Icones() {
    return (
        <div>
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faBehance} />
        </div>
    );
}

export default Icones;
