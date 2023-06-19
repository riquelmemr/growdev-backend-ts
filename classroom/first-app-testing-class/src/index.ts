import Ball from "./activities/ball";
import BombaCombustivel from "./activities/bomba-combustivel";
import Calculator from "./activities/calculator";
import Carro from "./activities/carro";
import Counter from "./activities/counter";
import CurrentAccount from "./activities/current-account";

// Primeira atividade
const counter = new Counter();
for (let i = 0; i < 10; i++) {
	counter.increment();
}

console.log(counter.getValue());
counter.reset();
console.log(counter.getValue());

// Segunda atividade
const ball = new Ball("vermelho", 10, "alumínio");
ball.changeColor("azul");
ball.showColor();

// Terceira atividade
const currentAccount = new CurrentAccount(213124324, "Riquelme", 10);
currentAccount.deposit(100);
currentAccount.withdraw(50);

// Quarta atividade
const calculator = new Calculator();
calculator.sum(10, 2);
calculator.subtract(15, 25);
calculator.multiply(40, 2);
calculator.divide(10, 5);
console.log(calculator.getHistory());

// Quinta atividade
const bombaCombustivel = new BombaCombustivel('aditivada', 10, 1000);
bombaCombustivel.abastecerPorValor(10);
bombaCombustivel.abastecerPorValor(20);
bombaCombustivel.abastecerPorLitro(10);
bombaCombustivel.alterarValorLitro(20);
bombaCombustivel.alterarTipoCombustivel('comum');
bombaCombustivel.alterarQuantidadeCombustivel(100);

// Sexta atividade
const carro = new Carro(10);
carro.adicionarGasolina(20);
carro.andar(100);
carro.obterGasolina();