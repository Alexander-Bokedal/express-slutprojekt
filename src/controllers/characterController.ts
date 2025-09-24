import { Request, Response } from "express"
import { Anime } from "../models/schemas"

export const getCharactersByAnime = async (req: Request, res: Response) => {
  try {
    const anime = await Anime.findById(req.params.animeId)
    if (!anime) {
      return res.status(404).json({ error: "Anime not found" })
    }
    res.json(anime.characters)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch characters" })
  }
}

export const getCharacterById = async (req: Request, res: Response) => {
  try {
    const anime = await Anime.findById(req.params.animeId)
    if (!anime) {
      return res.status(404).json({ error: "Anime not found" })
    }
    
    const character = anime.characters.find(char => char._id?.toString() === req.params.characterId)
    if (!character) {
      return res.status(404).json({ error: "Character not found" })
    }
    
    res.json(character)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch character" })
  }
}