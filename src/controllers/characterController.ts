import { Request, Response } from "express";
import { Anime } from "../models/schemas";

export const getCharactersByAnime = async (req: Request, res: Response) => {
  try {
    const anime = await Anime.findById(req.params.animeId);
    if (!anime) {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.json(anime.characters);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch characters" });
  }
};

export const getCharacterById = async (req: Request, res: Response) => {
  try {
    const anime = await Anime.findById(req.params.animeId);
    if (!anime) {
      return res.status(404).json({ error: "Anime not found" });
    }

    const character = anime.characters.find(
      (char) => char._id?.toString() === req.params.characterId,
    );
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }

    res.json(character);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch character" });
  }
};

export const updateCharacter = async (req: Request, res: Response) => {
  try {
    const anime = await Anime.findById(req.params.animeId);
    if (!anime) {
      return res.status(404).json({ error: "Anime not found" });
    }

    const character = anime.characters.find(
      (char) => char._id?.toString() === req.params.characterId,
    );
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }

    character.powerLevel = {
      ...character.powerLevel,
      name: req.body.name || character.powerLevel?.name,
      value: req.body.value || character.powerLevel?.value,
    };
    await anime.save();
    res.json(character);
  } catch (error) {
    res.status(400).json({ error: "Failed to update character" });
  }
};
