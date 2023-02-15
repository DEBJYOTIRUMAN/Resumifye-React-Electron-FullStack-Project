import express from "express";
const router = express.Router();
import {
  authController,
  resumeController,
} from "../controllers";

// Auth Routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Resume Routes
router.post("/resume", resumeController.createResume);
router.put("/resume/:id", resumeController.updateResume);
router.get("/resume/:userId", resumeController.userResume);
router.delete("/resume/:id", resumeController.deleteResume);
router.get("/resume/search/:projectName", resumeController.searchResume);

export default router;
