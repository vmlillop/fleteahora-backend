import fleteRoutes from './routes/fleteRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import evaluacionRoutes from './routes/evaluacionRoutes.js';

dotenv.config();

console.log("DATABASE_URL en runtime:", process.env.DATABASE_URL);

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/fletes', fleteRoutes);
app.use('/api/protegido', protectedRoutes);
app.use('/api/evaluaciones', evaluacionRoutes);


app.get('/', (req, res) => {
  res.send('API FleteAhora activa');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});


// redeploy test