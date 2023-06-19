interface FormatoDeElemento {
  desenhar(): void;
  redimensionar(): void;
}

class Circulo implements FormatoDeElemento {
  public raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  public desenhar(): void {
    console.log(`Desenhando um círculo de raio ${this.raio}`);
  }

  public redimensionar(): void {
    console.log(`Redimensionando o círculo de raio ${this.raio}`);
  }
}

class Retangulo implements FormatoDeElemento {
  public comprimento: number;
  public altura: number;

  constructor(comprimento: number, altura: number) {
    this.comprimento = comprimento;
    this.altura = altura;
  }

  public desenhar(): void {
    console.log(`Desenhando um retângulo de comprimento ${this.comprimento} e altura ${this.altura}`);
  }

  public redimensionar(): void {
    console.log(`Redimensionando o retângulo de comprimento ${this.comprimento} e altura ${this.altura}`);
  }
}

export { Circulo, Retangulo };
