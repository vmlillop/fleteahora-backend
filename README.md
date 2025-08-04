# 🚚 FleteAhora - Backend

*FleteAhora* es una plataforma digital que permite gestionar y optimizar el transporte de cargas pequeñas y medianas en Chile, conectando usuarios y transportistas de manera eficiente. Este repositorio contiene el backend del sistema, desarrollado con Node.js, Express y Prisma.

---

## 🔧 Tecnologías utilizadas

- Node.js + Express
- Prisma ORM + PostgreSQL
- JSON Web Tokens (JWT) para autenticación
- Docker + Docker Compose (opcional)
- Jest para testing (opcional)

---

## 🚀 Instalación

Clona el repositorio y navega a la carpeta:

```bash
git clone https://github.com/vmlillop/fleteahora-backend.git
cd fleteahora-backend
```

Instala las dependencias:

```bash
npm install
```

Copia el archivo `.env.example` como `.env` y completa las variables:

```bash
cp .env.example .env
```

Ejecuta las migraciones de la base de datos:

```bash
npx prisma migrate dev --name init
```

Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

---

## 📁 Estructura del proyecto

```
fleteahora-backend/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   └── index.js
├── prisma/
│   └── schema.prisma
├── docs/
│   └── API.md
├── .env
├── .gitignore
├── docker-compose.yml
└── package.json
```

---

## 🔑 Variables de entorno (.env)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/fleteahora
JWT_SECRET=tu_secreto_super_secreto
PORT=3000
```

---

## 🧪 Scripts útiles

```bash
npm run dev        # Inicia el servidor en modo desarrollo
npm run start      # Inicia el servidor en producción
npm run test       # Ejecuta los tests (si configurado)
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más información.