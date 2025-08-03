import express from 'express';
import { verificarToken as authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/perfil', authMiddleware, (req, res) => {
  res.json({ mensaje: 'Acceso autorizado', usuario: req.usuario });
});

export default router;

