import { Character, validateCharacter } from "../src/validateCharacter";

const character = {
  name: "Naruto",
  life: 1000,
  strength: 500,
  defense: 300,
};

const increaseCharacterStrength = (
  character: Character,
  newStrength: number
): void => {
  if (!validateCharacter(character)) {
    throw new Error("Personagem inválido");
  }

  const strength = character.strength;

  const newCharacterStrength = character.strength + 200;

  character.strength = newCharacterStrength;

  if (newCharacterStrength < strength) {
    throw new Error("A nova força deve ser maior que a atual");
  }
};
