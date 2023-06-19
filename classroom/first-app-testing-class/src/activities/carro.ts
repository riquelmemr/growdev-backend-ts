class Carro {
  consumoCombustivel: number;
  quantidadeCombustivel: number = 0;

  constructor(consumoCombustivel: number) {
    this.consumoCombustivel = consumoCombustivel;
  }

  andar(distancia: number) {
    const litros = distancia / this.consumoCombustivel;

    if (litros > this.quantidadeCombustivel) {
      return;
    }

    this.quantidadeCombustivel -= litros;
    console.log(`O carro andou por ${distancia}km e gastou ${litros}L. Total de combustível: ${this.quantidadeCombustivel}L`);
  }

  obterGasolina() {
    console.log(`O carro está com ${this.quantidadeCombustivel}L de combustível.`);
  }

  adicionarGasolina(quantidade: number) {
    this.quantidadeCombustivel += quantidade;
  }
}

export default Carro;