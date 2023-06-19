interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  aplicarDescontoEmReais(desconto: number): void;
}

interface ValorPedido {
  recuperarValorTotal(): number;
  removeItem(item: string): void;
}

class Pedido implements ValorPedido, Desconto {
  itens: ItemPedido[] = [];
  valor: number = 0;

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }
}

class ItemPedido implements Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    this.valor -= this.valor * desconto / 100;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}
