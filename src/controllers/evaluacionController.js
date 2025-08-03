import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const crearEvaluacion = async (req, res) => {
  try {
    const { fleteId, comentario, puntuacion } = req.body;

    // Validación básica
    if (puntuacion < 1 || puntuacion > 5) {
      return res.status(400).json({ error: 'Puntuación debe estar entre 1 y 5' });
    }

    const evaluacion = await prisma.evaluacion.create({
      data: { fleteId, comentario, puntuacion }
    });

    res.status(201).json({ mensaje: 'Evaluación registrada', evaluacion });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear evaluación', detalle: error.message });
  }
};
