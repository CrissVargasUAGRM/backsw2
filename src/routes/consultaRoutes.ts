import { Router } from "express";
import * as consultaController from "../controllers/consultaController";
import * as reservaController from "../controllers/reservaController";

const router = Router();

router.post('/registrarConsulta', consultaController.registerConsulta);
router.post('/regreserva', reservaController.registrarReserva);
router.get('/getreservas', reservaController.getReservas); 

export default router;