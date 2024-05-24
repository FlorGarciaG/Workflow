import {
  getSolxprus,
  createSolxpru,
  getSolutionById,
  deleteSolxpru,
  putSolxpru
} from "../controllers/SolxpruController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getSolxprus);
router.route("/").post(createSolxpru);
router.route("/:id").get(getSolutionById);
router.route("/:id").delete(deleteSolxpru);
router.route("/:id").put(putSolxpru);

export default router;
