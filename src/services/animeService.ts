import { IAnimeRepository } from "../repositories/interfaces/IAnimeRepository"
import { MongoAnimeRepository } from "../repositories/implementations/MongoAnimeRepository"
import { Anime, AnimeMetadata } from "../domain/models"

export function createAnimeService(repository?: IAnimeRepository) {
  const repo = repository || new MongoAnimeRepository()
  
  return {
    async getAllAnimes(): Promise<Anime[]> {
      return await repo.findAll()
    },

    async getAnimeById(id: string): Promise<Anime | null> {
      return await repo.findById(id)
    },

    async getAnimeByTitle(title: string): Promise<Anime | null> {
      return await repo.findByTitle(title)
    },

    async createAnime(animeData: Omit<Anime, "id">): Promise<Anime> {
      return await repo.create(animeData)
    },

    async getAnimeMetadata(): Promise<AnimeMetadata> {
      return await repo.getMetadata()
    }
  }
}

export const animeService = createAnimeService()
export type AnimeService = ReturnType<typeof createAnimeService>
