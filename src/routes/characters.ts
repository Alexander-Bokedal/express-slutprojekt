import { Router } from "express";
import {
  getCharactersByAnime,
  getCharacterById,
  updateCharacter,
  addCharacter,
  compareStrongest,
} from "../controllers/characterController";

const router = Router();

router.get("/:animeId/characters", getCharactersByAnime);
router.get("/:animeId/characters/:characterId", getCharacterById);
router.put("/:animeId/characters/:characterId", updateCharacter);
router.post("/:animeId/characters", addCharacter);
router.get("/:animeId1/compare/:animeId2", compareStrongest);
export default router;
