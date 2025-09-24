import { Router } from "express";
import animeRoutes from "./anime";
import characterRoutes from "./characters";
const router = Router();
router.use("/api/animes", animeRoutes);
router.use("/api/animes", characterRoutes);
export default router;
