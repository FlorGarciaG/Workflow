import {
  getSolxprus,
  createSolxpru,
} from "../controllers/SolxpruController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getSolxprus);
router.route("/").post(createSolxpru);

export default router;
