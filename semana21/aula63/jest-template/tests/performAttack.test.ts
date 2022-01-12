import { performAttack } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

test("Perform Attack test", () => {
  const validator = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Naruto",
    life: 1500,
    strength: 200,
    defense: 600,
  };

  const defender: Character = {
    name: "",
    life: 1300,
    strength: 400,
    defense: 800,
  };

  try {
    performAttack(attacker, defender, validator as any);
  } catch (error) {
    expect(error.message).toBe("Invalid Character!");
    expect(validator).toHaveBeenCalled();
    expect(validator).toHaveBeenCalledTimes(2);
    expect(validator).toHaveReturnedTimes(2);
  }

  //A)
  expect(defender.life).toEqual(1300);
  expect(validator).toHaveBeenCalled();
  expect(validator).toHaveBeenCalledTimes(2);
  expect(validator).toHaveReturnedTimes(2);
});
