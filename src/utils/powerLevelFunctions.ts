import { Character } from "../domain/models";

/**
 * @param characters Array of Character objects
 * @returns The Character with the highest powerLevel, or null if empty
 */
export function getStrongest(characters: Character[]): Character | null {
  if (!characters || characters.length === 0) {
    return null;
  }

  return characters.reduce((max, char) =>
    char.powerLevel.value > max.powerLevel.value ? char : max,
  );
}
