class Item {
  public valor: number;
  public nome: string;
  public descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    this.valor = valor;
    this.nome = nome;
    this.descricao = descricao;
  }
}

class Pedido {
  public itens: Item[];
  private valorTotal: number;

  constructor() {
    this.itens = [];
    this.valorTotal = 0;
  }
}

export { Item, Pedido };
