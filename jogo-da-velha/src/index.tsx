import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {ChecarVitoria, ControlarClick, ControlarTurno, CriarQuadrados, ReiniciarJogo} from './logica';

const {useState,useEffect} = React;

const EstadoInicial = {
  QuadradoValor:'',
  VezJogador: 'X',
}

const Quadrado = (VezJogador:string, Button:boolean) => {
  const [QuadradoValor, setQuadradoValor] = useState('');
  return(
      <button className='quadrado' onClick={() => {
        ControlarClick(QuadradoValor,setQuadradoValor,VezJogador);
      }} disabled={!Button}>
        {QuadradoValor}
      </button>
  );
}

const Tabuleiro = () => {
  const [VezJogador, setVezJogador] = useState('X');
  const [Button, setButton] = useState(true)
  const Quadrados = CriarQuadrados(VezJogador, Button, Quadrado);
  useEffect(() => {
    if(ChecarVitoria(Quadrados,VezJogador)){
      setButton(false);
    }
  },[VezJogador]);
  console.log(Quadrados[0].props);
  console.log(typeof(Quadrados[0]));
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
  const [Reiniciar, setReiniciar] = useState(0);
  return(
    <div className='body'>
      <h2>Jogo da velha:</h2>
      <div>
        {Tabuleiro()}
        <p id='aviso'></p>
        <p id='ganhador'></p>
        <button className='reiniciar' onClick={() => {
          ReiniciarJogo(Reiniciar, setReiniciar);
        }}>
          Reiniciar jogo
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);