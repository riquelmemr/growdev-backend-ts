import express, { Request, Response } from "express";
import { getRepositories, getUserFromGithub } from "./github";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.get("/calculadora", (req: Request, res: Response) => {
  const { operacao, valorA, valorB } = req.query;
  let resultado = 0;

  console.log(operacao, valorA, valorB);

  switch (operacao) {
    case "somar":
      resultado = Number(valorA) + Number(valorB);
      break;
    case "subtrair":
      resultado = Number(valorA) - Number(valorB);
      break;
    case "multiplicar":
      resultado = Number(valorA) * Number(valorB);
      break;
    case "dividir":
      resultado = Number(valorA) == 0 ? 0 : Number(valorA) / Number(valorB);
      break;
    default:
      res.send(operacao);
      break;
  }

  return res.json(resultado);
})

let contador = 0;
app.get("/contador", (req: Request, res: Response) => {
  contador++;
  
  if (contador == 10) {
    res.send("Chegou a 10!");
    contador = 0;
    return;
  }

  return res.json(contador);
})

app.get("/numeral", (req: Request, res: Response) => {
  const { number, operacao } = req.query;
  let resultado: number | string = '';

  if (operacao == "anterior") {
    resultado = Number(number) - 1;
  } else if (operacao == "proximo") {
    resultado = Number(number) + 1;
  } else {
    resultado = 'Operação inválida!';
  }

  return res.json(resultado);
})

app.get("/inverter-string", (req: Request, res: Response) => {
  const { valor } = req.query;
  return res.json(String(valor).split("").reverse().join(""));
})

const array: string[] = [];
app.get('/remover-vogais', (req: Request, res: Response) => {
  const { valor } = req.query;
  array.push(String(valor).replace(/[aeiou]/gi, ''));
  return res.json(array);
})

getUserFromGithub("djunior97");
getUserFromGithub("djunioriqdivqv97");

getRepositories("marcelo-growdev/scrapbook-es6");
getRepositories("marcelo-growdev/qdbqqbqwn");

app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});