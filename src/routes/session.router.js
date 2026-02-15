import { Router } from "express";
import {registerUser, loginUser, currentUser} from "../controllers/session.controller.js";
import { requireAuth } from "../middleware/jwt.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", requireAuth, currentUser);

export default router;