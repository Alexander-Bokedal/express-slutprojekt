import { Anime, Character } from "../domain/models";

export class AnimeMapper {
  static toDomain(mongoDoc: any): Anime {
    return {
      id: mongoDoc._id?.toString(),
      title: mongoDoc.title,
      genre: mongoDoc.genre || [],
      characters:
        mongoDoc.characters?.map((char: any) => this.characterToDomain(char)) ||
        [],
    };
  }

  static toMongo(domainAnime: Omit<Anime, "id">): any {
    return {
      title: domainAnime.title,
      genre: domainAnime.genre,
      characters: domainAnime.characters.map((char) =>
        this.characterToMongo(char),
      ),
    };
  }

  static characterToDomain(mongoChar: any): Character {
    return {
      id: mongoChar._id?.toString(),
      name: mongoChar.name,
      description: mongoChar.description,
      powerLevel: mongoChar.powerLevel
        ? {
            name: mongoChar.powerLevel.name,
            value: mongoChar.powerLevel.value,
          }
        : { name: "", value: 0 },
    };
  }

  static characterToMongo(domainChar: Omit<Character, "id">): any {
    return {
      name: domainChar.name,
      description: domainChar.description,
      powerLevel: domainChar.powerLevel,
    };
  }
}

