import { Anime, AnimeMetadata } from "../../domain/models"

export interface IAnimeRepository {
  findAll(): Promise<Anime[]>
  findById(id: string): Promise<Anime | null>
  findByTitle(title: string): Promise<Anime | null>
  create(anime: Omit<Anime, "id">): Promise<Anime>
  update(id: string, anime: Partial<Anime>): Promise<Anime | null>
  delete(id: string): Promise<boolean>
  getMetadata(): Promise<AnimeMetadata>
}