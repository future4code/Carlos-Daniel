type Transaction = {
  description: string;
  value: number;
  date: string;
};

class UserAccount {
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

  user1: UserAccount = new UserAccount("123456", "Carlos Daniel", 21);
}
