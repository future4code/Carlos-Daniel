import { validateCharacter } from "../src/validateCharacter";

describe("test function validate character", () => {
  //a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".
  test("empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 2000,
      strength: 300,
      defense: 450,
    });
    expect(result).toBe(false);
  });
  //b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.
  test("life equal zero", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 0,
      strength: 300,
      defense: 450,
    });
    expect(result).toBe(false);
  });
  //c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.
  test("strength equal zero", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 1000,
      strength: 0,
      defense: 450,
    });
    expect(result).toBe(false);
  });
  //d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.
  test("defense equal zero", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 1000,
      strength: 500,
      defense: 0,
    });
    expect(result).toBe(false);
  });
  //e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
  test("negative number", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 1000,
      strength: 500,
      defense: -200,
    });
    expect(result).toBe(false);
  });
  //f.Crie um teste que verifique o comportamento da função com um personagem com as informações validas
  test("validate function", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 3000,
      strength: 400,
      defense: 600,
    });
    expect(result).toBe(true);
  });
});
