import { Router } from "express";
import * as paymentController from "../controllers/paymentController";

const router = Router();

router.get('/pyament', paymentController.createPayment);

export default router;