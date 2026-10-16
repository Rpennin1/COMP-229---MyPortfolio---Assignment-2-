
import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  userByID,
} from "../controllers/user.controller.js";

import {
  requireSignin,
  hasAuthorization,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Load the profile for routes containing :id.
router.param("id", userByID);

// Public routes.
router.get("/", getAllUsers);
router.post("/", createUser);

// Restrict deleting all users to authenticated requests.
router.delete("/", requireSignin, deleteAllUsers);

// Protected routes: sign-in required, and users may only access their own profile.
router.get("/:id", requireSignin, hasAuthorization, getUserById);
router.put("/:id", requireSignin, hasAuthorization, updateUser);
router.delete("/:id", requireSignin, hasAuthorization, deleteUser);

export default router;
