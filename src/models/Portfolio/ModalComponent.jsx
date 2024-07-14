import React from 'react';
import Modal from 'react-modal';
import styles from '../../styles/ModalComponent.module.css';

function ModalComponent({ isOpen, closeModal, images, title, description }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Detalhes do Projeto"
      className={styles.modal}
      overlayClassName="Overlay"
    >

      <div className={styles.modalContainer}>
        <button className={styles.modalButton} onClick={closeModal}>Fechar</button>
        <h1>{title}</h1>
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageItem}>
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
