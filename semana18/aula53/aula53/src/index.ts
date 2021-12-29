//Herança

//Exercício01
class User {
  constructor(
    private id: string,
    private email: string,
    private name: string,
    private password: string
  ) {
    console.log("Chamando o construtor da classe User");
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `Olá, sou o ${this.name}. Bom dia!`;
  }
}

const newUser = new User("1", "carlos@lbn.com", "Carlão", "");

// console.log(newUser);

//Exercício02 ao Exercício05
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const newCustomer = new Customer(
  "1",
  "carlos@lbn.com",
  "Carlão",
  "bananinha",
  "123456"
);
newCustomer.introduceYourself();

// console.log(newCustomer, newCustomer.introduceYourself());

//Exercício06
class Employee extends User {
  static BENEFITS_VALUE: number = 400;
  protected admissionDate: Date;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }
  public calculateTotalSalary(): number {
    return this.baseSalary + Employee.BENEFITS_VALUE;
  }
}

const newEmployee = new Employee(
  "1",
  "carlos@lbn.com",
  "Carlos",
  "ab",
  new Date("2021, 12, 10"),
  1800
);

// console.log(newEmployee);

//Exercício08 e Exercício09
//Exercício10
class Seller extends Employee {
  static SELLING_COMMISSION: number = 5;
  private salesQuantity: number = 0;

  public getSalesQuantity(): number {
    return this.salesQuantity;
  }

  public setSalesQuantity(): number {
    return (this.salesQuantity = 1000);
  }
  public calculateTotalSalary(): number {
    return (
      this.baseSalary + 400 + this.salesQuantity * Seller.SELLING_COMMISSION
    );
  }
}

const newSeller = new Seller(
  "1",
  "carlos@lbn.com",
  "Carlos",
  "ab",
  new Date("2021, 12, 10"),
  1800
);

// console.log(newSeller.calculateTotalSalary());

//Polimorfismo

//Exercício01
export interface Client {
  name: string;

  registrationNumber: number;

  consumedEnergy: number;

  calculateBill(): number;
}

const client: Client = {
  name: "Carlos",
  registrationNumber: 123456,
  consumedEnergy: 200,

  calculateBill: () => {
    return 2;
  },
};

// console.log(client);
// console.log(client.calculateBill());

//Exercício02
export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

//Exercício03
//Residência
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity;
  }
}

// const newResidence = new Residence(2, "123456");
// console.log(newResidence);

//Comércio
export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

// const newCommerce = new Commerce(5, "456123");
// console.log(newCommerce);

//Indústria
export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

// const newIndustry = new Industry(10, "123456");
// console.log(newIndustry);

//Exercício04
class ResidencialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }
  public getCpf(): string {
    return this.cpf;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

//Exercício05
class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }
  public getCnpj(): string {
    return this.cnpj;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

//Exercício06
class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industryNumber: string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }
  public getIndustryNumber(): string {
    return this.industryNumber;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}

//Exercício07
// class ClientManager {
//   private client: Client[] = [];

//   public getClientesQuantity(): number {
//     return this.client.length;
//   }
// }

//Exercício08
// class ClientManager {
//   private clients: Client[] = [];

//   public getClientsQuantity(): number {
//     return this.clients.length;
//   }

//   public registerClient(client: Client): void {
//     this.clients.push(client);
//   }
//   public calculateBillOfClient(registrationNumber: number): number {
//     const foundClient = this.clients.find((client) =>
//     client.registrationNumber === registrationNumber);

//     if(foundClient) {
//       return foundClient.calculateBill()
//     }
//     return 0
//   }

//Como seria na hora de instanciar

// const residentialClient = new ResidentialClient(...) // passar parêmetros
// clientManager.registerClient(residentialClient)

// const commercialClient = new CommercialClient(...) // passar parêmetros
// clientManager.registerClient(commercialClient)

// const industrialClient = new IndustrialClient(...) // passar parêmetros
// clientManager.registerClient(industrialClient)

//Exercício08

class ClientManager {
  private clients: Client[] = [];

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => (total += client.calculateBill()));

    return total;
  }

  public deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        registrationIndex = i;
      }
    }

    if (registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1);
    }
  }
}
