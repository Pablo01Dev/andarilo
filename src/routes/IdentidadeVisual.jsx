import React, { useState } from 'react';
import Modal from 'react-modal';
import { Element } from 'react-scroll';
import SecondHeader from '../models/SecondHeader';
import Card from '../models/Card';
import Projeto1 from '../assets/images/portfolio/image-nali-1.jpg';
import '../styles/IdentidadeVisual.css';
import Contact from '../models/Contact';
import Footer from '../models/Footer';
import { projects } from '../assets/Data/projectData';

Modal.setAppElement('#root');

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
              <Card
                key={project.id}
                fundo={Projeto1} // Troque para project.fundo se precisar de imagens diferentes
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal}>Fechar</button>
        <h1>{currentTitle}</h1>
        <div className="image-container">
          {currentImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <p>{currentDescription}</p>
      </Modal>
    </div>
  );
}

export default IdentidadeVisual;
