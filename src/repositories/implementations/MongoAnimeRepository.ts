import { IAnimeRepository } from "../interfaces/IAnimeRepository"
import { Anime as AnimeModel } from "../../models/schemas"
import { Anime, AnimeMetadata } from "../../domain/models"
import { AnimeMapper } from "../../mappers/animeMapper"

export class MongoAnimeRepository implements IAnimeRepository {
  async findAll(): Promise<Anime[]> {
    const animes = await AnimeModel.find({})
    return animes.map(anime => AnimeMapper.toDomain(anime))
  }

  async findById(id: string): Promise<Anime | null> {
    const anime = await AnimeModel.findById(id)
    return anime ? AnimeMapper.toDomain(anime) : null
  }

  async findByTitle(title: string): Promise<Anime | null> {
    const anime = await AnimeModel.findOne({ title })
    return anime ? AnimeMapper.toDomain(anime) : null
  }

  async create(animeData: Omit<Anime, "id">): Promise<Anime> {
    const mongoData = AnimeMapper.toMongo(animeData)
    const anime = new AnimeModel(mongoData)
    const savedAnime = await anime.save()
    return AnimeMapper.toDomain(savedAnime)
  }

  async update(id: string, animeData: Partial<Anime>): Promise<Anime | null> {
    const mongoData = animeData.id ? { ...animeData } : animeData
    delete (mongoData as any).id
    
    const updatedAnime = await AnimeModel.findByIdAndUpdate(id, mongoData, { new: true })
    return updatedAnime ? AnimeMapper.toDomain(updatedAnime) : null
  }

  async delete(id: string): Promise<boolean> {
    const result = await AnimeModel.findByIdAndDelete(id)
    return !!result
  }

  async getMetadata(): Promise<AnimeMetadata> {
    const animes = await this.findAll()

    const totalAnimes = animes.length
    const totalCharacters = animes.reduce(
      (sum, anime) => sum + anime.characters.length,
      0,
    )
    const avgCharactersPerAnime =
      totalAnimes > 0 ? totalCharacters / totalAnimes : 0

    const genreDistribution = this.calculateGenreDistribution(animes)

    return {
      totalAnimes,
      totalCharacters,
      avgCharactersPerAnime: Math.round(avgCharactersPerAnime * 100) / 100,
      genreDistribution,
    }
  }

  private calculateGenreDistribution(animes: Anime[]): Record<string, number> {
    return animes.reduce(
      (acc, anime) => {
        const genres = anime.genre || []
        genres.forEach((genre: string) => {
          acc[genre] = (acc[genre] || 0) + 1
        })
        return acc
      },
      {} as Record<string, number>,
    )
  }
}