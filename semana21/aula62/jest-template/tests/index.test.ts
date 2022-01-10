//Exercício 01
interface User {
  name: string;
  balance: number;
}

function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return { ...user, balance: user.balance - value };
  }
  return undefined;
}

//Exercício 02
test(" Faça um teste com um usuário com o saldo maior do que o valor de compra", () => {
  const user: User = {
    name: "Carlos",
    balance: 300,
  };

  const result = performPurchase(user, 250);

  expect(result).toEqual({
    name: "Carlos",
    balance: 50,
  });
});

test("Faça um teste com um usuário com o saldo igual ao valor de compra", () => {
  const user: User = {
    name: "Carlos",
    balance: 100,
  };

  const result = performPurchase(user, 100);

  expect(result).toEqual({
    name: "Carlos",
    balance: 0,
  });
});

test("Faça um teste com um usuário com o saldo menor do que o valor de compra", () => {
  const user: User = {
    name: "Carlos",
    balance: 30,
  };

  const result = performPurchase(user, 30);

  expect(result).not.toBeUndefined();
});
