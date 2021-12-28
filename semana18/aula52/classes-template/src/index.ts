import App from "./app";
import { UserAccount } from "./types";

/* Exercício 01

A)Serve para quando quisermos inicializar variáveis. Através de uma função
chamada constructor, ela pode receber parâmetros, que devem ser passados no
momento de criar a instância

 B) Foi impressa 1 vez
const usuario1: UserAccount = new UserAccount("123456", "Carlos Daniel", 21);
console.log(usuario1);

 C) Conseguimos ter acesso através do Constructor
*/

/*
 Exercício 02

 export class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription(): string {
    return this.description;
  }

  public getValue(): number {
    return this.value;
  }

  public getDate(): string {
    return this.date;
  }
}

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }
}
*/

//Exercício 03
