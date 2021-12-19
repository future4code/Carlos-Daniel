export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }

  static toUserModel(data: any): User {
    return new User(data.id, data.name, data.email, data.password);
  }
}

export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private date: Date
  ) {}
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDate() {
    return this.date;
  }

  static toRecipeModel(data: any): Recipe {
    return new Recipe(data.id, data.title, data.description, data.date);
  }
}
