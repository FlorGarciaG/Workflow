import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getUsers);
router.route("/").post(createUser);
router.route("/:id").put(updateUser);
router.route("/:id").get(getUserById);
router.route("/:id").delete(deleteUser);

export default router;
