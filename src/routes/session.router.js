import { Router } from "express";
import {registerUser, loginUser, currentUser} from "../controllers/session.controller.js";
import { requireAuth } from "../middleware/jwt.middleware.js";
import passport from "passport";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", requireAuth, passport.authenticate("jwt", { session: false }), currentUser);

export default router;