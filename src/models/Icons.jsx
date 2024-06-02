import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faBehance } from '@fortawesome/free-brands-svg-icons';

function Icons() {
    console.log('Icones renderizado');
    return (
        <div>
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faBehance} />
        </div>
    );
}

export default Icons;
