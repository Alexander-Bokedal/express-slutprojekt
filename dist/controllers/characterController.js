import { characterService } from "../services/characterService";
export const getCharactersByAnime = async (req, res) => {
    try {
        const characters = await characterService.getCharactersByAnimeId(req.params.animeId);
        res.json(characters);
    }
    catch (error) {
        if (error instanceof Error && error.message === "Anime not found") {
            return res.status(404).json({ error: "Anime not found" });
        }
        res.status(500).json({ error: "Failed to fetch characters" });
    }
};
export const getCharacterById = async (req, res) => {
    try {
        const character = await characterService.getCharacterById(req.params.animeId, req.params.characterId);
        if (!character) {
            return res.status(404).json({ error: "Character not found" });
        }
        res.json(character);
    }
    catch (error) {
        if (error instanceof Error && error.message === "Anime not found") {
            return res.status(404).json({ error: "Anime not found" });
        }
        res.status(500).json({ error: "Failed to fetch character" });
    }
};
export const updateCharacter = async (req, res) => {
    try {
        const character = await characterService.updateCharacter(req.params.animeId, req.params.characterId, { name: req.body.name, value: req.body.value });
        if (!character) {
            return res.status(404).json({ error: "Character not found" });
        }
        res.json(character);
    }
    catch (error) {
        if (error instanceof Error && error.message === "Anime not found") {
            return res.status(404).json({ error: "Anime not found" });
        }
        res.status(400).json({ error: "Failed to update character" });
    }
};
