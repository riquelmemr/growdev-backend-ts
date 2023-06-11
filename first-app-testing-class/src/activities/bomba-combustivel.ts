class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  abastecerPorValor(valor: number): void {
    const litros = valor / this.valorLitro;

    if (litros > this.quantidadeCombustivel) {
      return;
    }

    this.quantidadeCombustivel -= litros;
    console.log(`Abastecendo ${litros}L de ${this.tipoCombustivel}. Total de combustível: ${this.quantidadeCombustivel}L`);
  }

  abastecerPorLitro(litros: number): void {
    const valorParaSerPago = litros * this.valorLitro;

    if (litros > this.quantidadeCombustivel) {
      return;
    }

    this.quantidadeCombustivel += litros;
    console.log(
      `Você deverá pagar ${valorParaSerPago} reais por ${litros}L de ${this.tipoCombustivel}. Total de combustível: ${this.quantidadeCombustivel}L`
    );
  }

  alterarValorLitro(valor: number): void {
    this.valorLitro = valor;
    console.log(`Valor do litro alterado para ${this.valorLitro}`);
  }

  alterarTipoCombustivel(tipoCombustivel: string): void {
    this.tipoCombustivel = tipoCombustivel;
    console.log(`Tipo de combustível alterado para ${this.tipoCombustivel}`);
  }

  alterarQuantidadeCombustivel(quantidadeCombustivel: number): void {
    this.quantidadeCombustivel = quantidadeCombustivel;
    console.log(
      `Quantidade de combustível alterada para ${this.quantidadeCombustivel}L`
    );
  }
}

export default BombaCombustivel;
