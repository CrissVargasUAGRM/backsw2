import { Router } from "express";
import * as clinicController from "../controllers/clinicController";

const router = Router();

router.post('/registerClinic', clinicController.registerClinic);
router.get('/getClinics', clinicController.getAllClinic);
router.delete('/clinic/:id', clinicController.deleteClinic);

export default router;