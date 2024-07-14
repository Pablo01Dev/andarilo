import React from 'react';
import Modal from 'react-modal';
import '../../styles/ModalComponent.css'; // Importe seu arquivo de estilos para o modal, se houver

function ModalComponent({ isOpen, closeModal, images, title, description }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Detalhes do Projeto"
      className="Modal"
      overlayClassName="Overlay"
    >
      <button className='modal-button' onClick={closeModal}>Fechar</button>
      <div className="modal-container">
       
        <h1>{title}</h1>
        <div className="image-container">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </Modal>
  );
}

export default ModalComponent;
