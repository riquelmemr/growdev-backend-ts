class Aluno {
  private nome: string;
  private idade: number;
  private nota: number;
  private status: "Aprovado" | "Reprovado" | undefined;
  private respostas: string[];

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.nota = 0;
    this.status = undefined;
    this.respostas = [];
  }

  public getNome(): string {
    return this.nome;
  }

  public getNota(): number {
    return this.nota;
  }

  public getStatus(): "Aprovado" | "Reprovado" | undefined {
    return this.status;
  }

  realizarProva(): void {
    const opcoes = ['A', 'B', 'C', 'D'];

    for (let i = 1; i <= 10; i++) {
      this.respostas.push(opcoes[Math.floor(Math.random() * 4)]);
    }

    console.log(this.nome, this.respostas);
  }

  verificarNota(gabaritoProva: string[]): void {
    if (this.respostas.length < gabaritoProva.length) {
      console.log("Você não respondeu todas as questões");
      return;
    }

    for (let i = 0; i < gabaritoProva.length; i++) {
      if (gabaritoProva[i] === this.respostas[i]) {
        this.nota += 1;
      }
    }
  }

  realizarAvaliacaoAluno(): void {
    if (this.respostas.length < 10) {
      console.log("Você não respondeu todas as questões");
      return;
    }

    this.nota > 6 ? this.status = "Aprovado" : this.status = "Reprovado";
    return;
  }
}

export default Aluno;