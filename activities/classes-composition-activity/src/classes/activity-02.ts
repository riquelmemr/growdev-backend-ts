class Imovel {
  public endereco: string;
  public preco: number;

  constructor(endereco: string, preco: number) {
    this.endereco = endereco;
    this.preco = preco;
  }
}

class Novo extends Imovel {
  private _valorAdicional: number;  

  constructor(endereco: string, preco: number, valorAdicional: number) {
    super(endereco, preco);
    this._valorAdicional = valorAdicional;
  }

  get valorAdicional(): number {
    return this._valorAdicional;
  }

  public imprimeValor(): void {
    console.log(this.preco + this.valorAdicional);
  }
}

class Velho extends Imovel {
  private _desconto: number;

  constructor(endereco: string, preco: number, desconto: number) {
    super(endereco, preco);
    this._desconto = desconto;
  }

  get desconto(): number {
    return this._desconto;
  }

  public imprimeValor(): void {
    console.log(this.preco + this.desconto);
  }
}

export { Novo, Velho };
