import { Router } from "express";
import * as authController from "../controllers/authController";
import * as verify from "../middlewares/verify";

const router = Router();

router.post('/singup',  authController.singup);
router.post('/singin', authController.singin);

export default router;