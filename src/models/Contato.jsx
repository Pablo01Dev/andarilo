import React from 'react';
import '../styles/Contato.css';
import { FaWhatsapp } from "react-icons/fa";

function Contato() {
    return (
        <section>
            <div className="contatoContainer">
                <h2>Contato</h2>

                <div className="orcamento">
                    <p>Quer fazer um<br />orçamento?</p>
                    <button>Solicitar orçamento</button>
                </div>

                <p className="numero">21 96948-7301</p>
                <span className="email">pabloguimadesigner@gmail.com</span>

                <div className='redesSociais'>
                    <button type='button'>
                        <FaWhatsapp />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Contato;
