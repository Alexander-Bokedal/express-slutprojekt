import { Router } from "express";
import {
  getAllAnimes,
  getAnimeById,
  createAnime,
  getAnimeByName,
  getMetadata,
} from "../controllers/animeController";

const router = Router();

router.get("/", getAllAnimes);
router.get("/metadata", getMetadata);
router.get("/id/:id", getAnimeById);
router.get("/title/:title", getAnimeByName);
router.post("/", createAnime);

export default router;

