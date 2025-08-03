import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/perfil', authMiddleware, (req, res) => {
  res.json({ mensaje: 'Ruta protegida accedida con éxito', usuario: req.usuario });
});

export default router;
