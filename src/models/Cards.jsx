import React from 'react';
import Card from './Card';

import Image1 from '../assets/images/portfolio/image-nali-1.jpg';
import Image2 from '../assets/images/portfolio/image-nali-2.jpg';
import Image3 from '../assets/images/portfolio/image-nali-3.jpg';

import '../styles/Cards.css';

function Cards() {
    return (
        <div className="portfolio">
            <div className="cards">
                <Card fundo={Image1} titulo="Identidade Visual" />
                <Card fundo={Image2} titulo="Website" />
                <Card fundo={Image3} titulo="Outros" />
            </div>
        </div>
    );
}

export default Cards;
