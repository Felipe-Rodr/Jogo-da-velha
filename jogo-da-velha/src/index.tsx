import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {ChecarVitoria, ControlarClick, CriarQuadrados, ReiniciarJogo} from './logica';

const {useState,useEffect} = React;

const EstadoInicial = {
  QuadradoValor:'',
  VezJogador:'X',
  Button:true,
}

const Quadrado = (VezJogador:string, setVezJogador:React.Dispatch<React.SetStateAction<string>>, Button:boolean, Reiniciar:boolean) => {
  const [QuadradoValor, setQuadradoValor] = useState('');
  useEffect(() => {
    setQuadradoValor(EstadoInicial.QuadradoValor);
  },[Reiniciar])
  return(
      <button className='quadrado' onClick={() => {
        ControlarClick(QuadradoValor,setQuadradoValor,VezJogador,setVezJogador);
      }} disabled={!Button}>
        {QuadradoValor}
      </button>
  );
}

const Tabuleiro = (Button:boolean, setButton:React.Dispatch<React.SetStateAction<boolean>>, Reiniciar:boolean) => {
  const [VezJogador, setVezJogador] = useState('X');
  const Quadrados = CriarQuadrados(VezJogador, setVezJogador, Button, Reiniciar, Quadrado);
  useEffect(() => {
    if(ChecarVitoria(Quadrados,VezJogador)){
      setButton(false);
    }
  },[Quadrados,VezJogador,setButton]);
  useEffect(() => {
    setVezJogador(EstadoInicial.VezJogador);
    setButton(EstadoInicial.Button);
    document.getElementById('ganhador').innerHTML = '';
  },[Reiniciar,setButton]);
  console.log(Quadrados[0].props);
  console.log(typeof(Quadrados[0]));
  return(
    <><div className='VezJogador'>
      Proximo jogador: {VezJogador}
    </div>
    <div className='linha-tabuleiro'>
      {Quadrados[0]}
      {Quadrados[1]}
      {Quadrados[2]}
    </div>
    <div className='linha-tabuleiro'>
      {Quadrados[3]}
      {Quadrados[4]}
      {Quadrados[5]}
    </div>
    <div className='linha-tabuleiro'>
      {Quadrados[6]}
      {Quadrados[7]}
      {Quadrados[8]}
    </div></>
  );
}

const App = () => {
  const [Reiniciar, setReiniciar] = useState(false);
  const [Button, setButton] = useState(true)
  return(
    <div className='body'>
      <h2>Jogo da velha:</h2>
      <div className='tabuleiro'>
        {Tabuleiro(Button, setButton, Reiniciar)}
        <p id='aviso'></p>
        <p id='ganhador'></p>
        <button className='reiniciar' onClick={() => {
          ReiniciarJogo(Reiniciar, setReiniciar);
        }} disabled={Button}>
          Reiniciar jogo
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);