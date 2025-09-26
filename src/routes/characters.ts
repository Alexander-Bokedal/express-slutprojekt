import { Router } from "express";
import {
  getCharactersByAnime,
  getCharacterById,
  updateCharacter,
} from "../controllers/characterController";

const router = Router();

router.get("/:animeId/characters", getCharactersByAnime);
router.get("/:animeId/characters/:characterId", getCharacterById);
router.put("/:animeId/characters/:characterId", updateCharacter);

export default router;

