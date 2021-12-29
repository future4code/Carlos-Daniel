export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export interface character {
  name: string,
  gender: GENDER,
  id?: number,
  description?: string
}

export class Character implements character{

  constructor(
    public name: string,
    public gender: GENDER,
    public id?: number,
    public description?: string
  ) {
    console.log("Consegui criar " + this.name + " com sucesso!");
  }

  getName(): string {
    return this.name;
  }

  getId(): number | undefined {
    return this.id;
  }
  getGender(): GENDER  {
    return this.gender;
  }

  getDescription(): string | undefined {
    return this.description;
  }
}

const wolverine = new Character("Logan", GENDER.MALE, 11, "Se cura rápido e tem garra de adamantium");

const cyclops: character = {
  name: "Scott Summers",
  gender: GENDER.MALE,
  description: "Solta raio vermelho",
  id: 10
}

export class Animal {

  public name: string;
  public weight: number;

  constructor(name: string, weight: number) {
    console.log("Construindo um animal...")
    this.name = name;
    this.weight = weight;
    console.log("terminei o animal")
  }

  eat(quantity: number): void {
    this.weight += quantity
  }
}

export class Dog extends Animal {

  public static nomeCientifico: string = "cannis familiaris"

  bark(): void {
    console.log("Au au 🐶")
  }
}

export class Owl extends Animal {

  public wingspan: number

  constructor(
    owlName: string,
    owlWeight: number,
    wingspan: number
  ) {
    console.log("Construindo uma coruja...")
    super(owlName, owlWeight)
    this.wingspan = wingspan
    console.log("terminei a coruja")
  }

  chirp(): void {
    console.log("Hoo hoo 🦉")
  }

  fly(distance: number): void {
    console.log(`${this.name} voou ${distance} milhas`)

    this.weight -= distance
  }
}