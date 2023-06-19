abstract class Ingresso {
  public valorEmReais: number;

  constructor(valorEmReais: number) {
    this.valorEmReais = valorEmReais;
  }

  public imprimeValor(): void {
    console.log(this.valorEmReais);
  }
}

class Normal extends Ingresso {
  constructor(valorEmReais: number) {
    super(valorEmReais);
  }

  public imprimeValor(): void {
    console.log(this.valorEmReais);
  }
}

class Vip extends Ingresso {
  public valorAdicional: number;

  constructor(valorEmReais: number, valorAdicional: number) {
    super(valorEmReais);
    this.valorAdicional = valorAdicional;
  }

  public imprimeValor(): void {
    console.log(this.valorEmReais + this.valorAdicional);
  }
}

class Camarote extends Ingresso {
  public valorAdicional: number;

  constructor(valorEmReais: number, valorAdicional: number) {
    super(valorEmReais);
    this.valorAdicional = valorAdicional;
  }

  public imprimeValor(): void {
    console.log(this.valorEmReais + this.valorAdicional);
  }
}

export { Camarote, Normal, Vip };
