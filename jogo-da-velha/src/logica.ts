
export const ControlarClick = (QuadradoValor:string, setQuadradoValor: React.Dispatch<React.SetStateAction<string>>, VezJogador:string) => {
    if(QuadradoValor === ''){
      setQuadradoValor(VezJogador);
    } else {
      alert('Quadrado preenchido');
    }
    return 
}

export const CriarQuadrados = (VezJogador:string, Quadrado: (VezJogador:string) => JSX.Element) => {
    const Quadrados = [];
    for(let i=0; i<9; i++){
      Quadrados.push(Quadrado(VezJogador));
    }
    return Quadrados;
}

export const TrocarJogador = (VezJogador:string, setVezJogador: React.Dispatch<React.SetStateAction<string>>) => {
    if(VezJogador === 'X'){
      setVezJogador('O');
    } else if (VezJogador === 'O'){
      setVezJogador('X');
    } else if(VezJogador === ''){
      setVezJogador('X');
    }
}

export const ChecarVitoria = (Quadrados: JSX.Element[], VezJogador:string) => {
    if((Quadrados[0].props.QuadradoValor === 'X' && Quadrados[1].props.QuadradoValor === 'X' && Quadrados[2].props.QuadradoValor === 'X') || (Quadrados[0].props.QuadradoValor === 'O' && Quadrados[1].props.QuadradoValor === 'O' && Quadrados[2].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    } else if((Quadrados[3].props.QuadradoValor === 'X' && Quadrados[4].props.QuadradoValor === 'X' && Quadrados[5].props.QuadradoValor === 'X') || (Quadrados[3].props.QuadradoValor === 'O' && Quadrados[4].props.QuadradoValor === 'O' && Quadrados[5].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    } else if((Quadrados[6].props.QuadradoValor === 'X' && Quadrados[7].props.QuadradoValor === 'X' && Quadrados[8].props.QuadradoValor === 'X') || (Quadrados[6].props.QuadradoValor === 'O' && Quadrados[7].props.QuadradoValor === 'O' && Quadrados[8].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    } else if((Quadrados[0].props.QuadradoValor === 'X' && Quadrados[3].props.QuadradoValor === 'X' && Quadrados[6].props.QuadradoValor === 'X') || (Quadrados[0].props.QuadradoValor === 'O' && Quadrados[3].props.QuadradoValor === 'O' && Quadrados[6].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    } else if((Quadrados[1].props.QuadradoValor === 'X' && Quadrados[4].props.QuadradoValor === 'X' && Quadrados[7].props.QuadradoValor === 'X') || (Quadrados[1].props.QuadradoValor === 'O' && Quadrados[4].props.QuadradoValor === 'O' && Quadrados[7].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    } else if((Quadrados[2].props.QuadradoValor === 'X' && Quadrados[5].props.QuadradoValor === 'X' && Quadrados[8].props.QuadradoValor === 'X') || (Quadrados[2].props.QuadradoValor === 'O' && Quadrados[5].props.QuadradoValor === 'O' && Quadrados[8].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    } else if((Quadrados[0].props.QuadradoValor === 'X' && Quadrados[4].props.QuadradoValor === 'X' && Quadrados[8].props.QuadradoValor === 'X') || (Quadrados[0].props.QuadradoValor === 'O' && Quadrados[4].props.QuadradoValor === 'O' && Quadrados[8].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    } else if((Quadrados[2].props.QuadradoValor === 'X' && Quadrados[4].props.QuadradoValor === 'X' && Quadrados[6].props.QuadradoValor === 'X') || (Quadrados[2].props.QuadradoValor === 'O' && Quadrados[4].props.QuadradoValor === 'O' && Quadrados[6].props.QuadradoValor === 'O')){
        document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
    }
}