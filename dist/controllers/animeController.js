import { animeService } from "../services/animeService";
export const getAllAnimes = async (req, res) => {
    try {
        const animes = await animeService.getAllAnimes();
        res.json(animes);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch animes" });
    }
};
export const getAnimeById = async (req, res) => {
    try {
        const anime = await animeService.getAnimeById(req.params.id);
        if (!anime) {
            return res.status(404).json({ error: "Anime not found" });
        }
        res.json(anime);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch anime" });
    }
};
export const getAnimeByName = async (req, res) => {
    try {
        const anime = await animeService.getAnimeByTitle(req.params.title);
        if (!anime) {
            return res.status(404).json({ error: "Anime not found" });
        }
        res.json(anime);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch anime" });
    }
};
export const createAnime = async (req, res) => {
    try {
        const anime = await animeService.createAnime(req.body);
        res.status(201).json(anime);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to create anime" });
    }
};
export const getMetadata = async (req, res) => {
    try {
        const metadata = await animeService.getAnimeMetadata();
        res.json(metadata);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch metadata" });
    }
};
