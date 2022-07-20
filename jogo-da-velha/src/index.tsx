import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

class Quadrado extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:null,
    };
  }

  render(){
    return(
      <button className="quadrado" onClick={() => {
        this.setState({value:'X'});
       }}>
        {this.state.value}
      </button>
    );
  }
}

class Tabuleiro extends React.Component{
  renderQuadrado(i){
    return <Quadrado value={i}/>;
  }
  render(){
    const ProxJogador = 'Proximo jogador: X';
    return(
      <div>
        <div className="ProxJogador">
          {ProxJogador}
        </div>
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
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);