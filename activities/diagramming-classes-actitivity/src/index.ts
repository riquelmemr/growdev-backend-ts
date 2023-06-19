import { Item, Pedido } from "./classes/atividade_1";
import { Circulo, Retangulo } from "./classes/atividade_2";
import { Cachorro, Cavalo, Gato } from "./classes/atividade_3";
import { Guest, Hotel, Room } from "./classes/atividade_4";

// Diagrama de classes atividade 1
const pedido = new Pedido();
const item1 = new Item(10.99, "Item 1", "Descrição");
const item2 = new Item(39.99, "Item 2", "Descrição");

pedido.itens.push(item1);
pedido.itens.push(item2);
console.log(pedido);

// Diagrama de classes atividade 2
const circulo = new Circulo(10);
circulo.desenhar();
circulo.redimensionar();

const retangulo = new Retangulo(10, 20);
retangulo.desenhar();
retangulo.redimensionar();

// Diagrama de classes atividade 3
const cachorro = new Cachorro("Cachorro", 10);
const cavalo = new Cavalo("Cavalo", 10);
const gato = new Gato("Gato", 10);

cachorro.comer();
cavalo.comer();
gato.comer();

cachorro.latir();
cavalo.cavalgar();
gato.miar();

// Diagrama de classes atividade 4
const hotel = new Hotel("Hotel Peters");
hotel.addRoom(new Room(1));
hotel.addRoom(new Room(2));
hotel.addRoom(new Room(3));

const guest = new Guest("João", 20);
const reserve = hotel.makeReservation(guest, new Date('2022-01-01'), new Date('2022-01-02'));

if (reserve) {
  guest.makeCheckIn(reserve);
  guest.makeCheckOut(reserve);
  reserve.makePayment();
}

console.log(reserve);

