class Pessoa {
  public nome: string;
  public idade: number;
  public salario: number;

  constructor(nome: string, idade: number, salario: number) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }
}

export default Pessoa;