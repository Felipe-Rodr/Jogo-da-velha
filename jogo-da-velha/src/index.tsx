import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {ControlarClick, ControlarTurno, CriarQuadrados} from './logica';

const {useState} = React;

const Quadrado = (VezJogador:string) => {
  const [QuadradoValor, setQuadradoValor] = useState('');
  return(
      <button className='quadrado' onClick={() => {
        ControlarClick(QuadradoValor,setQuadradoValor,VezJogador);
      }}>
        {QuadradoValor}
      </button>
  );
}

const Tabuleiro = () => {
  const [VezJogador, setVezJogador] = useState('X');
  const Quadrados = CriarQuadrados(VezJogador,Quadrado);
  return(
    <><div className='VezJogador'>
      Proximo jogador: {VezJogador}
    </div>
    <div className='linha-tabuleiro' onClick={() => {
      ControlarTurno(Quadrados,VezJogador,setVezJogador);
    }}>
      {Quadrados[0]}
      {Quadrados[1]}
      {Quadrados[2]}
    </div>
    <div className='linha-tabuleiro' onClick={() => {
      ControlarTurno(Quadrados,VezJogador,setVezJogador);
    }}>
      {Quadrados[3]}
      {Quadrados[4]}
      {Quadrados[5]}
    </div>
    <div className='linha-tabuleiro' onClick={() => {
      ControlarTurno(Quadrados,VezJogador,setVezJogador);
    }}>
      {Quadrados[6]}
      {Quadrados[7]}
      {Quadrados[8]}
    </div></>
  );
}

const App = () => {
  return(
    <div className='body'>
      <h2>Jogo da velha:</h2>
      <div>
        {Tabuleiro()}
        <p id='aviso'></p>
        <p id='ganhador'></p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);