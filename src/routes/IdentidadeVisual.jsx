import React, { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Element } from 'react-scroll';
import SecondHeader from '../models/SecondHeader';
import Card from '../models/Card';
import Projeto1 from '../assets/images/portfolio/image-nali-1.jpg';
import '../styles/IdentidadeVisual.css';
import Contact from '../models/Contact';
import Footer from '../models/Footer';

const imagesSet1 = [
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
];

const imagesSet2 = [
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
];

const imagesSet3 = [
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
];

const imagesSet4 = [
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
  'https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
];

Modal.setAppElement('#root');

function IdentidadeVisual() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const openModal = (images) => {
    setCurrentImages(images);
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
            <Card fundo={Projeto1} titulo="Identidade Visual" onClick={() => openModal(imagesSet1)} />
            <Card fundo={Projeto1} titulo="Identidade Visual" onClick={() => openModal(imagesSet2)} />
            <Card fundo={Projeto1} titulo="Identidade Visual" onClick={() => openModal(imagesSet3)} />
            <Card fundo={Projeto1} titulo="Identidade Visual" onClick={() => openModal(imagesSet4)} />
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
        contentLabel="Image Carousel Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal}>Fechar</button>
        <Carousel>
          {currentImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
}

export default IdentidadeVisual;
