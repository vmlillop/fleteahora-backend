import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const register = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body; // email viene del cliente

    if (!password) {
      return res.status(400).json({ error: 'La contraseña es obligatoria' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await prisma.Usuario.create({
      data: {
        nombre,
        correo: email,               // Mapeo a campo del schema
        password: hashedPassword,
        rol: rol || 'usuario',       // Valor por defecto
        clave: '1234'                 // Obligatorio según schema
      }
    });

    res.status(201).json({ mensaje: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario', detalle: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // email viene del cliente
    const usuario = await prisma.Usuario.findUnique({ where: { correo: email } });

    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error en login', detalle: error.message });
  }
};
