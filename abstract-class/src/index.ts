import Manager from "./manager.class";
import Product from "./product.class";
import Store from "./store.class";

/***
 * Composição / Injeção de Depedência: uma classe de depende de outra classe para ser instanciada
 */

/**
 * Polimorfismo: um classe que herda de outra classe e pode redefinir seus métodos
 */

const commercialManager = new Manager("João", "111.111.111-11", 10000, 500);
commercialManager.receiveSalary(20000);
commercialManager.receiveBonus();

const financeManager = new Manager("José", "333.333.333-33", 20000, 1000);
financeManager.receiveSalary(30000);
financeManager.receiveBonus();

const shirt = new Product("Camisa", 49.99, 13);
const leg = new Product("Calça", 79.99, 2);

const store = new Store("Loja 1", commercialManager, financeManager, new Date());
store.addProduct(shirt);
store.addProduct(leg);
console.log(store);