import { Character, validateCharacter } from "../src/validateCharacter";

const attacker = {
  name: "Naruto",
  life: 1000,
  strength: 500,
  defense: 300,
};

const defender = {
  name: "Itachi",
  life: 1000,
  strength: 500,
  defense: 200,
};

const characters = [attacker, defender];

const recoverCharacters = (characters: Character[]): Character[] => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (characters.length < 2) {
    throw new Error("Insert 2 characters!");
  }

  for (const character of characters) {
    if (character.life < 1500) {
      character.life = 1500;
    }
  }

  return characters;
};
