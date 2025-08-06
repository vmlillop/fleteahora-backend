import express from 'express';
import { crearEvaluacion } from '../controllers/evaluacionController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', verificarToken, crearEvaluacion);

export default router;
