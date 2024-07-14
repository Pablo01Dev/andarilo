import React, { useState } from 'react';
import { Element } from 'react-scroll';
import SecondHeader from '../models/SecondHeader';
import CardProjetos from '../models/Portfolio/CardProjetos';
import Contact from '../models/Contact';
import Footer from '../models/Footer';
import ModalComponent from '../models/Portfolio/ModalComponent'; // Assumindo que ModalComponent está corretamente importado
import { projects } from '../assets/Data/projectData'; // Importe seus dados de projetos aqui

import '../styles/IdentidadeVisual.css';

function IdentidadeVisual() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  const openModal = (images, title, description) => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setCurrentDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SecondHeader />
      <div className='ConteinerProjetos'>
        <div className='Projetos'>
          <p id='titulo'>Identidade Visual</p>
          <div className='CardsProjeto'>
            {projects.map(project => (
              <CardProjetos
                key={project.id}
                fundo={project.fundo} // Aqui você pode ajustar para o fundo correto
                titulo={project.title}
                descricao={project.description}
                onClick={() => openModal(project.images, project.title, project.description)}
              />
            ))}
          </div>
        </div>
      </div>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
      <ModalComponent
        isOpen={modalIsOpen}
        closeModal={closeModal}
        images={currentImages}
        title={currentTitle}
        description={currentDescription}
      />
    </div>
  );
}

export default IdentidadeVisual;
