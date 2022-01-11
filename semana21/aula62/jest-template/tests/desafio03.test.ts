//Exercício 03
enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

interface Casino {
  name: string;
  location: LOCATION;
}

interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    }
    break;
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((u) => u.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((u) => u.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((u) => u.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((u) => u.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
}
//Exercício04

test("Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
  const brazilian: User = {
    name: "Carlos",
    age: 21,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.brazilians.allowed).toEqual(["Carlos"]);
});

test("Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil", () => {
  const american: User = {
    name: "George",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [american]);
  expect(result.brazilians.allowed).toEqual(["George"]);
});

test(" Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.", () => {
  const brazilian1: User = {
    name: "Astrodev BR 1",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev BR 2",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american1: User = {
    name: "Astrodev EUA 1",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev EUA 2",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian1,
    brazilian2,
    american1,
    american2,
  ]);

  expect(result.brazilians.unallowed).toEqual([
    "Astrodev BR 1",
    "Astrodev BR 2",
  ]);
  expect(result.americans.unallowed).toEqual([
    "Astrodev EUA 1",
    "Astrodev EUA 2",
  ]);
});

test("Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.", () => {
  const brazilian1: User = {
    name: "Astrodev BR 1",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev BR 2",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american1: User = {
    name: "Astrodev EUA 1",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev EUA 2",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian1,
    brazilian2,
    american1,
    american2,
  ]);
  expect(result.brazilians.unallowed).toEqual([
    "Astrodev BR 1",
    "Astrodev BR 2",
  ]);
  expect(result.americans.allowed).toEqual([
    "Astrodev EUA 1",
    "Astrodev EUA 2",
  ]);
});

//Exercício05
//A)  Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o tamanho do array allowed da propriedade brasilians tenha tamanho menor do que 2 e maior do que 0.

test("1 brazilian allowed", () => {
  const brazilian: User = {
    name: "Astrodev",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Balada estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);

  expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  expect(result.brazilians.allowed.length).toBeLessThan(2);
});

//B)  Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o tamanho do array allowed da propriedade americans tenha tamanho igual a 0.

test("1 american allowed", () => {
  const american: User = {
    name: "Astrodev EUA",
    age: 20,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [american]);

  expect(result.americans.allowed.length).toEqual(0);
});

//C) Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays unallowed possuam o nome de algum dos usuários que você criou

test("No one allowed", () => {
  const brazilian1: User = {
    name: "Astrodev BR 1",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev BR 2",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american1: User = {
    name: "Astrodev EUA 1",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev EUA 2",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada estelar",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian1,
    brazilian2,
    american1,
    american2,
  ]);

  expect(result.brazilians.unallowed).toContain("Astrodev BR 1");
  expect(result.americans.unallowed).toContain("Astrodev EUA 1 ");
});

//D) Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o tamanho do array unallowed da propriedade brasilians tenha tamanho maior do que 1. Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho menor do que 1. Verifique que o tamanho do array allowed da propriedade americans tenha tamanho igual a 2.
test("2 american allowed and 2 brazilians unallowed", () => {
  const brazilian1: User = {
    name: "Astrodev BR 1",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev BR 2",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american1: User = {
    name: "Astrodev EUA 1",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev EUA 2",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian1,
    brazilian2,
    american1,
    american2,
  ]);

  expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  expect(result.americans.allowed.length).toBeLessThan(1);
  expect(result.americans.allowed.length).toEqual(2);
});
