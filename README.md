# FleteAhora 🚚

**FleteAhora** es una plataforma digital (backend) diseñada para optimizar el transporte de cargas pequeñas y medianas en Chile. El sistema permite a clientes y transportistas coordinar viajes, evaluar servicios y visualizar el historial de fletes.

## Características 🧩

- Registro y autenticación de usuarios con JWT.
- Creación y consulta de fletes asociados a cada usuario.
- Evaluación de servicios prestados (comentarios y puntuaciones).
- Seguridad mediante middleware de autenticación.
- Base de datos relacional gestionada con Prisma ORM y PostgreSQL.

## Estructura del proyecto 🗂️

```
fleteahora-backend/
│
├── prisma/               # Esquema y migraciones de base de datos
├── src/
│   ├── controllers/      # Lógica de negocio (usuarios, fletes, evaluaciones)
│   ├── middleware/       # Middleware de autenticación
│   ├── routes/           # Definición de rutas de la API
│   └── index.js          # Punto de entrada de la aplicación
├── .env                  # Variables de entorno (no subir al repositorio)
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

## Requisitos 🔧

- Node.js 18+
- Docker o PostgreSQL local
- Prisma CLI

## Uso 🧪

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar `.env`:
   ```
   DATABASE_URL="postgresql://usuario:clave@localhost:5432/fleteahora"
   JWT_SECRET="clave_secreta_segura"
   ```

3. Ejecutar migraciones:
   ```bash
   npx prisma migrate dev --name init
   ```

4. Iniciar servidor:
   ```bash
   npm start
   ```

## Licencia 📄

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---
Desarrollado con ❤️ por Víctor Lillo – 2025
