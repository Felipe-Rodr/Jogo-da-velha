
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