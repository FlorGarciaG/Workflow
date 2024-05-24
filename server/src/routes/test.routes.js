import {
  getTests,
  createTest,
  updateTest,
  getTestById,
  deleteTest,
} from "../controllers/TestController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getTests);
router.route("/").post(createTest);
router.route("/:id").put(updateTest);
router.route("/:id").get(getTestById);
router.route("/:id").delete(deleteTest);

export default router;
