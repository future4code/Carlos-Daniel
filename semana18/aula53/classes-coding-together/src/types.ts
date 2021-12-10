// export default class User {
//   private id: string;
//   private email: string;
//   private name: string;
//   private password: string;
//   public introduceYourself(): string {
//     return `Olá, sou ${this.name}, bom dia!`;
//   }

//   constructor(id: string, email: string, name: string, password: string) {
//     console.log("Chamando o construtor da classe User");
//     this.id = id;
//     this.email = email;
//     this.name = name;
//     this.password = password;
//   }

//   public getId(): string {
//     return this.id;
//   }

//   public getEmail(): string {
//     return this.email;
//   }

//   public getName(): string {
//     return this.name;
//   }

//   public getPassword(): string {
//     return this.password;
//   }
// }

// export class Customer extends User {
//   public purchaseTotal: number = 0;
//   private creditCard: string;

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string,
//     creditCard: string
//   ) {
//     super(id, email, name, password);
//     console.log("Chamando o construtor da classe Customer");
//     this.creditCard = creditCard;
//   }

//   public getCreditCard(): string {
//     return this.creditCard;
//   }
// }

//  ### Polimorfismo

// Exercício 01

// const clientObj: Client = {
//   name: "Carlão",
//   registrationNumber: 3,
//   consumedEnergy: 150,
//   calculateBill: () => {
//     return 2;
//   },
// };

// console.log(clientObj);
// console.log(clientObj.calculateBill());

// Exercício 02
export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  getResidentsQuantity(): number {
    return this.residentsQuantity;
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  calculateBill(): number;
}

export class ResidentialClient extends Residence implements Client {
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

export class ComercialClient extends Commerce implements Client {
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

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialRegistration: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustrialRegistration(): number {
    return this.industrialRegistration;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity + 100;
  }
}
