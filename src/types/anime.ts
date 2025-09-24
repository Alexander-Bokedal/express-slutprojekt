export interface PowerLevel {
  name: string
  value: number
}

export interface Character {
  name: string
  powerLevel: PowerLevel
  description: string
}

export interface Anime {
  title: string
  genre: string
  characters: Character[]
}