import { getTests, createTest } from "../controllers/TestController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getTests);
router.route("/").post(createTest);

export default router;
