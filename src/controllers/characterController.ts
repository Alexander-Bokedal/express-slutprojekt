import { Request, Response } from "express";
import { characterService } from "../services/characterService";
import { getStrongest } from "../utils/powerLevelFunctions";

export const getCharactersByAnime = async (req: Request, res: Response) => {
  try {
    const characters = await characterService.getCharactersByAnimeId(
      req.params.animeId,
    );
    res.json(characters);
  } catch (error) {
    if (error instanceof Error && error.message === "Anime not found") {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.status(500).json({ error: "Failed to fetch characters" });
  }
};

export const getCharacterById = async (req: Request, res: Response) => {
  try {
    const character = await characterService.getCharacterById(
      req.params.animeId,
      req.params.characterId,
    );
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    if (error instanceof Error && error.message === "Anime not found") {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.status(500).json({ error: "Failed to fetch character" });
  }
};

export const updateCharacter = async (req: Request, res: Response) => {
  try {
    const character = await characterService.updateCharacter(
      req.params.animeId,
      req.params.characterId,
      { name: req.body.name, value: req.body.value },
    );
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    if (error instanceof Error && error.message === "Anime not found") {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.status(400).json({ error: "Failed to update character" });
  }
};

export const addCharacter = async (req: Request, res: Response) => {
  try {
    const character = await characterService.createCharacter(
      req.params.animeId,
      {
        name: req.body.name,
        powerLevel: req.body.powerLevel,
        description: req.body.description,
      },
    );
    if (!character) {
      return res.status(404).json({ error: "No character to add" });
    }
    res.json(character);
  } catch (error) {
    if (error instanceof Error && error.message === "Anime not found") {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.status(400).json({ error: "Failed to create character" });
  }
};

export const compareStrongest = async (req: Request, res: Response) => {
  try {
    const characters = await characterService.getCharactersByAnimeId(
      req.params.animeId1,
    );
    const characters2 = await characterService.getCharactersByAnimeId(
      req.params.animeId2,
    );
    const compare = {
      char1: getStrongest(characters2),
      char2: getStrongest(characters),
    };
    res.json(compare);
  } catch (error) {
    if (error instanceof Error && error.message === "Anime not found") {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.status(500).json({ error: "Failed to fetch characters" });
  }
};
