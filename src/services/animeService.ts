import { Anime } from "../models/schemas";
import { Anime as AnimeInterface } from "../types/anime";

export class AnimeService {
  async getAllAnimes() {
    return await Anime.find({});
  }

  async getAnimeById(id: string) {
    return await Anime.findById(id);
  }

  async getAnimeByTitle(title: string) {
    return await Anime.findOne({ title });
  }

  async createAnime(animeData: AnimeInterface) {
    const anime = new Anime(animeData);
    return await anime.save();
  }

  async getAnimeMetadata() {
    const animes = await Anime.find({});

    const totalAnimes = animes.length;
    const totalCharacters = animes.reduce(
      (sum, anime) => sum + anime.characters.length,
      0,
    );
    const avgCharactersPerAnime =
      totalAnimes > 0 ? totalCharacters / totalAnimes : 0;

    const genreDistribution = this.calculateGenreDistribution(animes);

    return {
      totalAnimes,
      totalCharacters,
      avgCharactersPerAnime: Math.round(avgCharactersPerAnime * 100) / 100,
      genreDistribution,
    };
  }

  private calculateGenreDistribution(animes: any[]) {
    return animes.reduce(
      (acc, anime) => {
        const genres = anime.genre || [];
        genres.forEach((genre: string) => {
          acc[genre] = (acc[genre] || 0) + 1;
        });
        return acc;
      },
      {} as Record<string, number>,
    );
  }
}

export const animeService = new AnimeService();

