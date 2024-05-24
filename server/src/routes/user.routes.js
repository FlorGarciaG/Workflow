import { getUsers, createUser } from "../controllers/UserController.js";
import { Router } from "express";

const router = Router();

router.route('/').get(getUsers);
router.route('/').post(createUser);

export default router;