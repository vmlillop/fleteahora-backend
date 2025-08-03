import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const crearFlete = async (req, res) => {
  try {
    const { origen, destino, descripcion, fecha } = req.body;
    const nuevoFlete = await prisma.flete.create({
      data: {
        origen,
        destino,
        descripcion,
        fecha: new Date(fecha),
        usuarioId: req.usuario.id
      },
    });
    res.status(201).json({ mensaje: 'Flete creado', flete: nuevoFlete });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear flete', detalle: error.message });
  }
};


export const obtenerMisFletes = async (req, res) => {
  try {
    const usuarioId = req.usuario.id;

    const fletes = await prisma.flete.findMany({
      where: { usuarioId },
      orderBy: { fecha: 'desc' }
    });

    res.json({ fletes });
  } catch (error) {
    console.error('Error al obtener fletes:', error);
    res.status(500).json({
      error: 'Error al obtener fletes',
      detalle: error.message
    });
  }
};
