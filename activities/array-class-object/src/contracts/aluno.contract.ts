interface IAluno {
  realizarProva: () => void;
  verificarNota: (gabaritoProva: string[]) => void;
  realizarAvaliacaoAluno: () => string;
}