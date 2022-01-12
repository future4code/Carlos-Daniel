import { Character, validateCharacter } from "../src/validateCharacter";

const character = {
  name: "Naruto",
  life: 1000,
  strength: 500,
  defense: 300,
};

const decreaseCharacterDefense = (
  character: Character,
  newDefense: number
): void => {
  if (!validateCharacter(character)) {
    throw new Error("Personagem inválido");
  }

  const defense = character.defense;

  const newCharacterDefense = character.defense - 50;

  if (newCharacterDefense > defense) {
    throw new Error("A nova defesa deve ser menor que a defesa atual");
  }
};
