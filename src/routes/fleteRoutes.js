import express from 'express';
import { crearFlete, obtenerMisFletes } from '../controllers/fleteController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', verificarToken, crearFlete);
router.get('/mis-fletes', verificarToken, obtenerMisFletes);

export default router;

