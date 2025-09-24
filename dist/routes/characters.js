import { Router } from "express";
import { getCharactersByAnime, getCharacterById } from "../controllers/characterController";
const router = Router();
router.get("/:animeId/characters", getCharactersByAnime);
router.get("/:animeId/characters/:characterId", getCharacterById);
export default router;
