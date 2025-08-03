import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Crear un nuevo flete
export const crearFlete = async (req, res) => {
  try {
    const { origen, destino, fecha } = req.body;
    const usuarioId = req.usuario.id; // viene del token

    const nuevoFlete = await prisma.flete.create({
      data: {
        origen,
        destino,
        fecha: new Date(fecha),
        usuarioId,
      },
    });

    res.status(201).json({ mensaje: 'Flete creado', flete: nuevoFlete });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear flete', detalle: error.message });
  }
};

// Obtener los fletes del usuario autenticado
export const obtenerMisFletes = async (req, res) => {
  try {
    const usuarioId = req.usuario.id;

    const fletes = await prisma.flete.findMany({
      where: { usuarioId },
    });

    res.json({ fletes });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener fletes', detalle: error.message });
  }
};

