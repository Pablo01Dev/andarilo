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
                Foi um prazer desenvolver este projeto juntos!
            </p>

            <img 
                src="https://raw.githubusercontent.com/Pablo01Dev/andarilo/main/src/assets/images/acompanhamento.png" 
                alt="Parceria de sucesso" 
                className={styles.bottomImage} 
            />


            <p className={styles.message}>
                Será feito um acompanhamento durante um perído de 3 meses,<br/> 
                garantindo que o funcionamento do website não seja interrompido.<br/>
                Estaremos disponíveis também para alterações e atualizações. 
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

            <img 
                src="https://raw.githubusercontent.com/Pablo01Dev/andarilo/main/src/assets/images/enjoy-projeto.png" 
                alt="enjoydrinks" 
                className={styles.bottomImage} 
            />
        </div>
    );
};

export default Agradecimento;
