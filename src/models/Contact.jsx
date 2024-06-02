import React from 'react';
import '../styles/Contact.css';
import { FaBehance, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
    return (
        <section>
            <div className="contatoContainer">
                <h2>Contato</h2>

                <div className="orcamento">
                    <p>Quer fazer um<br />orçamento?</p>
                    <a href="https://wa.me/+5521969487301" target="_blank" rel="noopener noreferrer">
                        <button>Solicitar orçamento</button>
                    </a>

                </div>

                <p className="numero">21 96948-7301</p>
                <span className="email">pabloguimadesigner@gmail.com</span>

                <div className='redesSociais'>
                    <a href="https://wa.me/+5521969487301" target="_blank" rel="noopener noreferrer">
                        <button type='button'><FaWhatsapp /></button>
                    </a>
                    <a href="https://www.instagram.com/andarilo.st" target="_blank" rel="noopener noreferrer">
                        <button type='button'><FaInstagram /></button>
                    </a>
                </div>


            </div>
        </section>
    );
}

export default Contact;
