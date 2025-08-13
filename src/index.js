sudo -u ec2-user bash -lc 'cat > /home/ec2-user/app/src/index.js << "JS"
import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

// Rutas existentes en tu repo
import fleteRoutes from "./routes/fleteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import evaluacionRoutes from "./routes/evaluacionRoutes.js";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const PORT = Number(process.env.PORT) || 8080;

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/fletes", fleteRoutes);
app.use("/api/protegido", protectedRoutes);
app.use("/api/evaluaciones", evaluacionRoutes);

// Salud
app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true, status: "healthy" });
});

// Raíz
app.get("/", (_req, res) => {
  res.status(200).send("API FleteAhora activa");
});

// Arranque único (NO duplicar)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log("DATABASE_URL en runtime:", process.env.DATABASE_URL);
});

// Manejo básico de errores
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
JS'
