export const ControlarClick = (QuadradoValor:string, setQuadradoValor: React.Dispatch<React.SetStateAction<string>>, VezJogador:string) => {
  if(QuadradoValor === ''){
    document.getElementById('aviso').innerHTML = '';
    setQuadradoValor(VezJogador);
  } else {
    document.getElementById('aviso').innerHTML = 'Erro: Quadrado preenchido.'
  }
  return 
}

export const CriarQuadrados = (VezJogador:string, Button:boolean, Reiniciar:boolean, Quadrado: (VezJogador:string, Button:boolean, Reiniciar:boolean) => JSX.Element) => {
  const Quadrados = [];
  for(let i=0; i<9; i++){
    Quadrados.push(Quadrado(VezJogador, Button, Reiniciar));
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
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[0].props.children;
      return 1;
  } else if((Quadrados[3].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[5].props.children === 'X') || (Quadrados[3].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[5].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[3].props.children;
      return 1;
  } else if((Quadrados[6].props.children === 'X' && Quadrados[7].props.children === 'X' && Quadrados[8].props.children === 'X') || (Quadrados[6].props.children === 'O' && Quadrados[7].props.children === 'O' && Quadrados[8].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[6].props.children;
      return 1;
  } else if((Quadrados[0].props.children === 'X' && Quadrados[3].props.children === 'X' && Quadrados[6].props.children === 'X') || (Quadrados[0].props.children === 'O' && Quadrados[3].props.children === 'O' && Quadrados[6].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[0].props.children;
      return 1;
  } else if((Quadrados[1].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[7].props.children === 'X') || (Quadrados[1].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[7].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[1].props.children;
      return 1;
  } else if((Quadrados[2].props.children === 'X' && Quadrados[5].props.children === 'X' && Quadrados[8].props.children === 'X') || (Quadrados[2].props.children === 'O' && Quadrados[5].props.children === 'O' && Quadrados[8].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[2].props.children;
      return 1;
  } else if((Quadrados[0].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[8].props.children === 'X') || (Quadrados[0].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[8].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[0].props.children;
      return 1;
  } else if((Quadrados[2].props.children === 'X' && Quadrados[4].props.children === 'X' && Quadrados[6].props.children === 'X') || (Quadrados[2].props.children === 'O' && Quadrados[4].props.children === 'O' && Quadrados[6].props.children === 'O')){
      document.getElementById('ganhador').innerHTML = 'Ganhador: ' + Quadrados[2].props.children;
      return 1;
  } else if(Quadrados[0].props.children !== '' && Quadrados[1].props.children !== '' && Quadrados[2].props.children !== '' && Quadrados[3].props.children !== '' && Quadrados[4].props.children !== '' && Quadrados[5].props.children !== '' && Quadrados[6].props.children !== '' && Quadrados[7].props.children !== '' && Quadrados[8].props.children !== ''){
    document.getElementById('ganhador').innerHTML = 'Empate'
    return 1;
  } else {
    return 0;
  }
}

export const ControlarTurno = (Quadrados: JSX.Element[], VezJogador: string, setVezJogador: React.Dispatch<React.SetStateAction<string>>) => {
  TrocarJogador(VezJogador,setVezJogador);
}

export const ReiniciarJogo = (Reiniciar:boolean, setReiniciar:React.Dispatch<React.SetStateAction<boolean>>) => {
  if(Reiniciar){
    setReiniciar(false);
  } else {
    setReiniciar(true);
  }
}