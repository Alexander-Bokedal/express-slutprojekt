import { Anime } from "../models/schemas";
export const getAllAnimes = async (req, res) => {
    try {
        const animes = await Anime.find({});
        res.json(animes);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch animes" });
    }
};
export const getAnimeById = async (req, res) => {
    try {
        const anime = await Anime.findById(req.params.id);
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
        console.log(req.params.title);
        const anime = await Anime.findOne({ title: req.params.title });
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
        const anime = new Anime(req.body);
        await anime.save();
        res.status(201).json(anime);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to create anime" });
    }
};
export const getMetadata = async (req, res) => {
    try {
        const animes = await Anime.find({});
        const totalAnimes = animes.length;
        const totalCharacters = animes.reduce((sum, anime) => sum + anime.characters.length, 0);
        const avgCharactersPerAnime = totalAnimes > 0 ? totalCharacters / totalAnimes : 0;
        const genreDistribution = animes.reduce((acc, anime) => {
            const genres = anime.genre || [];
            genres.forEach(genre => {
                acc[genre] = (acc[genre] || 0) + 1;
            });
            return acc;
        }, {});
        const metadata = {
            totalAnimes,
            totalCharacters,
            avgCharactersPerAnime: Math.round(avgCharactersPerAnime * 100) / 100,
            genreDistribution
        };
        res.json(metadata);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch metadata" });
    }
};
