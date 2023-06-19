abstract class Animal {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(): void {
    console.log(`${this.nome} está comendo.`);
  }

  public dormir(): void {
    console.log(`${this.nome} está dormindo.`);
  }

  public andar(): void {
    console.log(`${this.nome} está andando.`);
  }
}

class Cachorro extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  public latir(): void {
    console.log(`${this.nome} está latindo.`);
  }
}

class Cavalo extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  cavalgar(): void {
    console.log(`${this.nome} está cavalgando.`);
  }
}

class Gato extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  miar(): void {
    console.log(`${this.nome} está miando.`);
  }
}

export { Cachorro, Cavalo, Gato };
