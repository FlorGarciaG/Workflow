import {
  getSolutions,
  createSolution,
  getSolutionById,
  deleteSolution,
  updateSolution
} from "../controllers/SolutionController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getSolutions);
router.route("/").post(createSolution);
router.route("/:id").get(getSolutionById);
router.route("/:id").delete(deleteSolution);
router.route("/:id").put(updateSolution);

export default router;
