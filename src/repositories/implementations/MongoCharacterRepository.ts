import { ICharacterRepository } from "../interfaces/ICharacterRepository";
import { Anime as AnimeModel } from "../../models/schemas";
import { Character } from "../../domain/models";
import { AnimeMapper } from "../../mappers/animeMapper";

export class MongoCharacterRepository implements ICharacterRepository {
  async findByAnimeId(animeId: string): Promise<Character[]> {
    const anime = await AnimeModel.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }
    return (
      anime.characters?.map((char: any) =>
        AnimeMapper.characterToDomain(char),
      ) || []
    );
  }

  async findById(
    animeId: string,
    characterId: string,
  ): Promise<Character | null> {
    const anime = await AnimeModel.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }

    const character = this.findCharacterInAnime(anime, characterId);
    return character ? AnimeMapper.characterToDomain(character) : null;
  }

  async update(
    animeId: string,
    characterId: string,
    updates: Partial<Character>,
  ): Promise<Character | null> {
    const anime = await AnimeModel.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }

    const character = this.findCharacterInAnime(anime, characterId);
    if (!character) {
      throw new Error("Character not found");
    }

    if (updates.name) character.name = updates.name;
    if (updates.description) character.description = updates.description;
    if (updates.powerLevel) {
      character.powerLevel = {
        ...character.powerLevel,
        ...updates.powerLevel,
      };
    }

    await anime.save();
    return AnimeMapper.characterToDomain(character);
  }

  async create(
    animeId: string,
    characterData: Omit<Character, "id">,
  ): Promise<Character> {
    const anime = await AnimeModel.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }

    const mongoCharacter = AnimeMapper.characterToMongo(characterData);
    anime.characters.push(mongoCharacter);
    await anime.save();

    const newCharacter = anime.characters[anime.characters.length - 1];
    return AnimeMapper.characterToDomain(newCharacter);
  }

  async delete(animeId: string, characterId: string): Promise<boolean> {
    const anime = await AnimeModel.findById(animeId);
    if (!anime) {
      throw new Error("Anime not found");
    }

    const characterIndex = anime.characters.findIndex(
      (char: any) => char._id?.toString() === characterId,
    );

    if (characterIndex === -1) {
      return false;
    }

    anime.characters.splice(characterIndex, 1);

    await anime.save();
    return true;
  }

  private findCharacterInAnime(anime: any, characterId: string) {
    return anime.characters.find(
      (char: any) => char._id?.toString() === characterId,
    );
  }
}

