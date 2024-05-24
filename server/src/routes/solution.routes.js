import {
  getSolutions,
  createSolution,
} from "../controllers/SolutionController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getSolutions);
router.route("/").post(createSolution);

export default router;
