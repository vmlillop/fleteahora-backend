// src/routes/protectedRoutes.js

import express from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verificarToken, (req, res) => {
  res.json({
    mensaje: 'Acceso concedido a ruta protegida',
    usuario: req.usuario
  });
});

export default router;




