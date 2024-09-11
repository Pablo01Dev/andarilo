import React from 'react';
import styles from '../styles/Agradecimento.module.css';

const Agradecimento = () => {
    return (
        <div className={styles.container}>
            <img
                src="https://raw.githubusercontent.com/Pablo01Dev/andarilo/main/src/assets/images/confete.png"
                alt="Confete celebrando a parceria"
                className={styles.topImage}
            />
            <h1 className={styles.title}>Obrigado pela Parceria!</h1>
            <p className={styles.message}>
                Agradecemos imensamente pela oportunidade de trabalhar com vocês.<br />
                Foi um prazer desenvolver o website da Enjoy!
            </p>

            <img
                src="https://raw.githubusercontent.com/Pablo01Dev/andarilo/main/src/assets/images/observer.png"
                alt="Parceria de sucesso"
                className={styles.bottomImage}
            />

            <p className={styles.message}>
                Vamos acompanhar o website durante 3 meses para garantir que o funcionamento não seja interrompido,
                e durante esse período estaremos à disposição para realizar atualizações e ajustes necessário
            </p>

            <img
                src="https://raw.githubusercontent.com/Pablo01Dev/andarilo/main/src/assets/images/parceria.png"
                alt="Parceria de sucesso"
                className={styles.bottomImage}
            />

            <p className={styles.message}>
                Esperamos continuar essa parceria e contribuir para o sucesso de vocês.<br />
                Contem sempre conosco!
            </p>


        </div>
    );
};

export default Agradecimento;
