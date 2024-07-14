import React from 'react';
import styles from '../styles/Contact.module.css';
import { useInView } from 'react-intersection-observer';
import { FaBehance, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div className={styles.baseContato}>
               <div ref={ref} className={`${styles.contatoContainer} ${inView ? styles.visible : ''}`}>
                <h2>Contato</h2>
                <div className={styles.contactContent}>
                    <div className={styles.orcamento}>
                        <p>Quer fazer um<br />orçamento?</p>
                        <a href="https://wa.me/+5521969487301" target="_blank" rel="noopener noreferrer">
                            <button>Solicitar orçamento</button>
                        </a>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.numero}>21 96948-7301</p>
                        <span className={styles.email}>andarilo.st@gmail.com</span>

                        <div className={styles.redesSociais}>
                            <a href="https://wa.me/+5521969487301" target="_blank" rel="noopener noreferrer">
                                <button type='button'><FaWhatsapp /></button>
                            </a>
                            <a href="https://www.instagram.com/andarilo.st" target="_blank" rel="noopener noreferrer">
                                <button type='button'><FaInstagram /></button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
}

export default Contact;
