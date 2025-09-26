import { Router } from "express";
import animeRoutes from "./anime";
import characterRoutes from "./characters";
const router = Router();
router.use("/api/", animeRoutes);
router.use("/api/", characterRoutes);
export default router;
