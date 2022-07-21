import { render } from '@testing-library/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {ControlarClick, CriarQuadrados, TrocarJogador} from './logica';

const {useState} = React;

const Quadrado = (VezJogador:string) => {
  const [QuadradoValor, setQuadradoValor] = useState('');
  return(
      <button className='quadrado' onClick={() =>{
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
      TrocarJogador(VezJogador,setVezJogador);
    }}>
      {Quadrados[0]}
      {Quadrados[1]}
      {Quadrados[2]}
    </div>
    <div className='linha-tabuleiro' onClick={() => {
      TrocarJogador(VezJogador,setVezJogador);
    }}>
      {Quadrados[3]}
      {Quadrados[4]}
      {Quadrados[5]}
    </div>
    <div className='linha-tabuleiro' onClick={() => {
      TrocarJogador(VezJogador,setVezJogador);
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
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


/*class Quadrado extends React.Component<any, any>{
    render() {
      return (
        <button className="quadrado" 
          onClick={() => {this.props.onClick();} 
          }>
          {this.props.value}
        </button>
      );
    }
  }

class Tabuleiro extends React.Component<any, any> {
  constructor(props: {}){
    super(props);
    this.state = {
      quadrados: Array(9).fill(null),
    };
  }

  ControlarClick(i:any){
    const quadrados = this.state.quadrados.slice();
    quadrados[i] = 'X';
    this.setState({quadrados: quadrados});
  }
  
  renderQuadrado(i:number) {
    return (<Quadrado value={this.state.quadrados[i]}
      onClick={() =>this.ControlarClick(i)} />
    );
  }

  render() {
    const ProxJogador = 'Proximo jogador: X';

    return (
      <div>
        <div className="ProxJogador">{ProxJogador}</div>
        <div className="linha-tabuleiro">
          {this.renderQuadrado(0)}
          {this.renderQuadrado(1)}
          {this.renderQuadrado(2)}
        </div>
        <div className="linha-tabuleiro">
          {this.renderQuadrado(3)}
          {this.renderQuadrado(4)}
          {this.renderQuadrado(5)}
        </div>
        <div className="linha-tabuleiro">
          {this.renderQuadrado(6)}
          {this.renderQuadrado(7)}
          {this.renderQuadrado(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Tabuleiro />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{/}</ol>
        </div>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
*/
