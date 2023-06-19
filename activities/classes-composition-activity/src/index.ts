// Pilares POO e Composição Atividade

import { Camarote, Normal, Vip } from "./classes/activity-01";
import { Novo, Velho } from "./classes/activity-02";
import { Cachorro, Cavalo, Gato } from "./classes/activity-03";
import { Pessoa, Universidade } from "./classes/activity-04";
import { Departamento5, Pessoa5, Universidade5 } from "./classes/activity-05";

// Pilares POO e Composição Atividade 1
const ingressoNormal = new Normal(10);
const ingressoVip = new Vip(10, 5);
const ingressoCamarote = new Camarote(10, 20);

ingressoNormal.imprimeValor();
ingressoVip.imprimeValor();
ingressoCamarote.imprimeValor();

// Pilares POO e Composição Atividade 2
const novo = new Novo("Rua 1", 100, 10);
const valorAdicional = novo.valorAdicional;
console.log(valorAdicional);
novo.imprimeValor();

const velho = new Velho("Rua 2", 100, 10);
const desconto = velho.desconto;
console.log(desconto);
velho.imprimeValor();

// Pilares POO e Composição Atividade 3
const cachorro = new Cachorro("Cachorro", 10);
const cavalo = new Cavalo("Cavalo", 10);
const gato = new Gato("Gato", 10);

cachorro.comer();
cavalo.comer();
gato.comer();

cachorro.latir();
cavalo.cavalgar();
gato.miar();

// Pilares POO e Composição Atividade 4
const universidade = new Universidade("Universidade", "Rua 3");
const pessoa = new Pessoa("Pessoa", "Rua 4", universidade);
pessoa.imprimeDados();

// Pilares POO e Composição Atividade 5
const departamento = new Departamento5("Departamento de Engenharia");
const universidade5 = new Universidade5("Universidade", "Rua 5", [departamento]);
const pessoa5 = new Pessoa5("Riquelme", "09/06/2005", universidade5, departamento);

pessoa5.imprimeDados();