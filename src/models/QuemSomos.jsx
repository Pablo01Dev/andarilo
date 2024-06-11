import React from "react";
import Image1 from '../assets/images/pablo-guima.png';
import '../styles/QuemSomos.css';

function QuemSomos() {
    return (
        <div className="Fundo">
            <div className="Corpo">
                <h2>Quem sou?</h2>
                <div className="personContent">
                    <img src={Image1} alt="pablo-guimarães" />
                    <p>
                        O Andarilo é a personificação de uma característica minha, Pablo Guimarães.<br /><br />
                        Representa a essência do meu constante caminhar entre ideias, desejos, caminhos e paixões.<br /><br />
                        Em cada projeto, busco transmitir essa jornada, não apenas como mais uma tarefa, mas como uma oportunidade única de expressar minha visão de forma técnica e artística. Aqui, cada criação é uma trilha exploratória, onde cada passo é dado com intenção e paixão.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QuemSomos;
