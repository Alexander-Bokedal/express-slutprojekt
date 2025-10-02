export interface PowerLevel {
  name: string
  value: number
}

export interface Character {
  id?: string
  name: string
  powerLevel: PowerLevel
  description: string
}

export interface Anime {
  id?: string
  title: string
  genre: string[]
  characters: Character[]
}

export interface AnimeMetadata {
  totalAnimes: number
  totalCharacters: number
  avgCharactersPerAnime: number
  genreDistribution: Record<string, number>
}