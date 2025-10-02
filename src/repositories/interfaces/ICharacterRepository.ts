import { Character } from "../../domain/models"

export interface ICharacterRepository {
  findByAnimeId(animeId: string): Promise<Character[]>
  findById(animeId: string, characterId: string): Promise<Character | null>
  update(animeId: string, characterId: string, updates: Partial<Character>): Promise<Character | null>
  create(animeId: string, character: Omit<Character, "id">): Promise<Character>
  delete(animeId: string, characterId: string): Promise<boolean>
}