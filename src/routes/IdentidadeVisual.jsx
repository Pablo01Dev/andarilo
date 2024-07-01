import React from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from '../models/SecondHeader';
import Card from '../models/Card';
import Projeto1 from '../assets/images/portfolio/image-nali-1.jpg';
import '../styles/IdentidadeVisual.css';
import Contact from '../models/Contact';
import Footer from '../models/Footer';
import { Element } from 'react-scroll';

function IdentidadeVisual() {
  return (
    <div>
      <SecondHeader />
      <div className='ConteinerProjetos'>
        <div className='Projetos'>
          <p id='titulo'>Identidade Visual</p>
          <div className='CardsProjeto'>
            <Card fundo={Projeto1} titulo="Identidade Visual" page="/andarilo/identidade-visual" />
            <Card fundo={Projeto1} titulo="Identidade Visual" page="/andarilo/identidade-visual" />
            <Card fundo={Projeto1} titulo="Identidade Visual" page="/andarilo/identidade-visual" />
            <Card fundo={Projeto1} titulo="Identidade Visual" page="/andarilo/identidade-visual" />
          </div>
        </div>
      </div>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      < Footer />
    </div>
  );
}

export default IdentidadeVisual;
