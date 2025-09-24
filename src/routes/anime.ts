import { Router } from "express"
import { getAllAnimes, getAnimeById, createAnime } from "../controllers/animeController"

const router = Router()

router.get("/", getAllAnimes)
router.get("/:id", getAnimeById)
router.post("/", createAnime)

export default router