export const ControlarClick = (QuadradoValor:string, setQuadradoValor: React.Dispatch<React.SetStateAction<string>>, VezJogador:string) => {
  if(QuadradoValor === ''){
    document.getElementById('aviso').innerHTML = '';
    setQuadradoValor(VezJogador);
  } else {
    document.getElementById('aviso').innerHTML = 'Erro: Quadrado preenchido.'
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
  if((Quadrados[0].props.children === 'X' && Quadrados[1].props.children === 'X' && Quadrados[2].props.children === 'X') || (Quadrados[0].props.children === 'O' && Quadrados[1].props.children === 'O' && Quadrados[2].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else if((Quadrados[3].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[5].props.children === 'X') || (Quadrados[3].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[5].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else if((Quadrados[6].props.children === 'X' && Quadrados[7].props.children === 'X' && Quadrados[8].props.children === 'X') || (Quadrados[6].props.children === 'O' && Quadrados[7].props.children === 'O' && Quadrados[8].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else if((Quadrados[0].props.children === 'X' && Quadrados[3].props.children === 'X' && Quadrados[6].props.children === 'X') || (Quadrados[0].props.children === 'O' && Quadrados[3].props.children === 'O' && Quadrados[6].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else if((Quadrados[1].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[7].props.children === 'X') || (Quadrados[1].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[7].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else if((Quadrados[2].props.children === 'X' && Quadrados[5].props.children === 'X' && Quadrados[8].props.children === 'X') || (Quadrados[2].props.children === 'O' && Quadrados[5].props.children === 'O' && Quadrados[8].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else if((Quadrados[0].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[8].props.children === 'X') || (Quadrados[0].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[8].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else if((Quadrados[2].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[6].props.children === 'X') || (Quadrados[2].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[6].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + VezJogador;
      return 1;
  } else {
    return 0;
  }
}

export const ControlarTurno = (Quadrados: JSX.Element[], VezJogador: string, setVezJogador: React.Dispatch<React.SetStateAction<string>>) => {
  if(ChecarVitoria(Quadrados,VezJogador)){
    return;
  } else {
    TrocarJogador(VezJogador,setVezJogador);
  }
}