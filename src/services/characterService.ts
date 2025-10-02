import { ICharacterRepository } from "../repositories/interfaces/ICharacterRepository"
import { MongoCharacterRepository } from "../repositories/implementations/MongoCharacterRepository"
import { Character } from "../domain/models"

export function createCharacterService(repository?: ICharacterRepository) {
  const repo = repository || new MongoCharacterRepository()
  
  return {
    async getCharactersByAnimeId(animeId: string): Promise<Character[]> {
      return await repo.findByAnimeId(animeId)
    },

    async getCharacterById(animeId: string, characterId: string): Promise<Character | null> {
      return await repo.findById(animeId, characterId)
    },

    async updateCharacter(
      animeId: string,
      characterId: string,
      updates: { name?: string; value?: number },
    ): Promise<Character | null> {
      const characterUpdates: Partial<Character> = {}
      
      if (updates.name) {
        characterUpdates.name = updates.name
      }
      
      if (updates.value !== undefined) {
        characterUpdates.powerLevel = { name: "", value: updates.value }
      }

      return await repo.update(animeId, characterId, characterUpdates)
    },

    async createCharacter(animeId: string, characterData: Omit<Character, "id">): Promise<Character> {
      return await repo.create(animeId, characterData)
    },

    async deleteCharacter(animeId: string, characterId: string): Promise<boolean> {
      return await repo.delete(animeId, characterId)
    }
  }
}

export const characterService = createCharacterService()
export type CharacterService = ReturnType<typeof createCharacterService>

