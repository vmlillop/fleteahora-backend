import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { Router } from 'express';
import { crearFlete, obtenerMisFletes } from '../controllers/fleteController.js';
import verificarToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, crearFlete);

export default router;


router.post('/', verificarToken, crearFlete);
router.get('/mis-fletes', verificarToken, obtenerMisFletes); // 👈 NUEVO
