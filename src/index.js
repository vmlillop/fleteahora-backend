import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

import fleteRoutes from "./routes/fleteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import evaluacionRoutes from "./routes/evaluacionRoutes.js";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = Number(process.env.PORT) || 8080;

app.use(express.json());

// Rutas API
app.use("/api/auth", authRoutes);
app.use("/api/fletes", fleteRoutes);
app.use("/api/protegido", protectedRoutes);
app.use("/api/evaluaciones", evaluacionRoutes);

// Salud de la app
app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true, status: "healthy" });
});

// Raíz
app.get("/", (_req, res) => {
  res.status(200).send("API FleteAhora activa");
});

// Arranque único
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
});

// Errores no capturados
process.on("unhandledRejection", (r) => console.error("Unhandled:", r));
process.on("uncaughtException", (e) => console.error("Uncaught:", e));
