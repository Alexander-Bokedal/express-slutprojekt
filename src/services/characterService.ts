import { Anime } from "../models/schemas";

export class CharacterService {
  async getCharactersByAnimeId(animeId: string) {
    const anime = await Anime.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }
    return anime.characters;
  }

  async getCharacterById(animeId: string, characterId: string) {
    const anime = await Anime.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }

    const character = this.findCharacterInAnime(anime, characterId);
    if (!character) {
      throw new Error("Character not found");
    }

    return character;
  }

  async updateCharacter(
    animeId: string,
    characterId: string,
    updates: { name?: string; value?: number },
  ) {
    const anime = await Anime.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }

    const character = this.findCharacterInAnime(anime, characterId);
    if (!character) {
      throw new Error("Character not found");
    }

    character.powerLevel = {
      ...character.powerLevel,
      name: updates.name || character.powerLevel?.name,
      value: updates.value || character.powerLevel?.value,
    };

    await anime.save();
    return character;
  }

  private findCharacterInAnime(anime: any, characterId: string) {
    return anime.characters.find(
      (char: any) => char._id?.toString() === characterId,
    );
  }
}

export const characterService = new CharacterService();

