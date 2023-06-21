import Aluno from "./class/aluno.class";
import Pessoa from "./class/pessoa.class";

///////////////////// Atividade 01
const numbers = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]
const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0
})

console.log(oddNumbers);

///////////////////// Atividade 02 /////////////////////
const listOfNumbers = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4]
const total = listOfNumbers.reduce((total, number) => {
  return total + number
}, 0)

console.log(total);

///////////////////// Atividade 03 /////////////////////
const pessoa01 = new Pessoa("João", 25, 1000);
const pessoa02 = new Pessoa("Maria", 18, 2000);
const pessoa03 = new Pessoa("José", 35, 3000);
const pessoa04 = new Pessoa("Ana", 20, 4000);
const pessoa05 = new Pessoa("Joana", 40, 5000);

const pessoas = [pessoa01, pessoa02, pessoa03, pessoa04, pessoa05];
const pessoasComIdadeMenorQue23 = pessoas.filter((pessoa) => {
  return pessoa.idade < 23;
})

console.log(pessoasComIdadeMenorQue23);

////////////////////// Atividade 04 /////////////////////
const pessoasComIdadeMaiorQue30 = pessoas.filter((pessoa) => {
  return pessoa.idade < 30;
})

const somaDeIdades = pessoasComIdadeMaiorQue30.reduce((total, pessoa) => {
  return total + pessoa.idade;
}, 0)

const media = somaDeIdades / pessoasComIdadeMaiorQue30.length;
console.log(media);

///////////////////// Atividade 05 /////////////////////
const pessoasComSalarioMenorQue1027 = pessoas.filter((pessoa) => {
  return pessoa.salario < 1027;
})

const listaDePessoasComSalarioMenorQue1027 = pessoasComSalarioMenorQue1027.map((pessoa) => {
  return {
    nome: pessoa.nome,
    idade: pessoa.idade,
  }
})

console.log(listaDePessoasComSalarioMenorQue1027);

///////////////////// Atividade 06 /////////////////////
const gabaritoProva = ["B", "D", "C", "D", "A", "A", "B", "D", "C", "A"];

const aluno01 = new Aluno("João", 21);
const aluno02 = new Aluno("Maria", 18);
const aluno03 = new Aluno("José", 20);
const aluno04 = new Aluno("Ana", 20);
const aluno05 = new Aluno("Joana", 18);
const aluno06 = new Aluno("Riquelme", 19);
const aluno07 = new Aluno("Felipe", 23);
const aluno08 = new Aluno("Eduarda", 21);

const turma = [aluno01, aluno02, aluno03, aluno04, aluno05, aluno06, aluno07, aluno08];

const alunosReprovados: Aluno[] = [];
const alunosAprovados: Aluno[] = [];
const alunosPendentes: Aluno[] = [];
let mediaGeral = 0;
let melhorAluno: Aluno = turma[0];
let piorAluno: Aluno = turma[0];

turma.forEach((aluno) => {
  if (aluno.getNome() !== 'Riquelme') {
    aluno.realizarProva();
  }
  
  aluno.verificarNota(gabaritoProva);
  aluno.realizarAvaliacaoAluno();

  switch (aluno.getStatus()) {
    case 'Aprovado':
      alunosAprovados.push(aluno);
      break;
      
    case 'Reprovado':
      alunosReprovados.push(aluno);
      break;
      
    default:
      alunosPendentes.push(aluno);
      break;
  }

  if (aluno.getStatus()) {
    if (aluno.getNota() > melhorAluno.getNota()) {
      melhorAluno = aluno;
    }

    if (aluno.getNota() < piorAluno.getNota()) {
      piorAluno = aluno;
    }
  }
  
  mediaGeral += aluno.getNota() / turma.length;
})

console.log("=== Alunos aprovados ===");
alunosAprovados.forEach((aluno) => {
  console.log(`Nome: ${aluno.getNome()} - Nota: ${aluno.getNota()}`);
})

console.log("\n=== Alunos reprovados ===");
alunosReprovados.forEach((aluno) => {
  console.log(`Nome: ${aluno.getNome()} - Nota: ${aluno.getNota()}`);
})

console.log("\n=== Alunos pendentes ===");
alunosPendentes.forEach((aluno) => {
  console.log(`Nome: ${aluno.getNome()} - Nota: ${aluno.getNota()}`);
})

console.log("\n=== Média geral ===");
console.log("Média geral: " + mediaGeral);

console.log("\n=== Melhor aluno ===");
console.log(`Nome: ${melhorAluno.getNome()} - Nota: ${melhorAluno.getNota()}`);

console.log("\n=== Pior aluno ===");
console.log(`Nome: ${piorAluno.getNome()} - Nota: ${piorAluno.getNota()}`);

