import { Request, Response } from "express"
import { Anime } from "../models/schemas"

export const getAllAnimes = async (req: Request, res: Response) => {
  try {
    const animes = await Anime.find({})
    res.json(animes)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch animes" })
  }
}

export const getAnimeById = async (req: Request, res: Response) => {
  try {
    const anime = await Anime.findById(req.params.id)
    if (!anime) {
      return res.status(404).json({ error: "Anime not found" })
    }
    res.json(anime)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch anime" })
  }
}

export const createAnime = async (req: Request, res: Response) => {
  try {
    const anime = new Anime(req.body)
    await anime.save()
    res.status(201).json(anime)
  } catch (error) {
    res.status(400).json({ error: "Failed to create anime" })
  }
}