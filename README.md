# FleteAhora - Backend 🚚

**FleteAhora** es una plataforma digital para optimizar el transporte terrestre de cargas pequeñas y medianas en Chile. Este repositorio contiene el backend del sistema, desarrollado con Node.js, Express y Prisma ORM, utilizando una base de datos PostgreSQL.

## 🧠 Funcionalidad principal

- Registro y autenticación de usuarios (rol: cliente o transportista)
- Gestión de fletes: creación, visualización y asignación
- Evaluación de servicios por parte de los clientes
- Middleware de autenticación con JWT
- Base de datos gestionada con Prisma y PostgreSQL

---

## 🛠️ Tecnologías utilizadas

- **Node.js** + **Express**
- **PostgreSQL**
- **Prisma ORM**
- **JWT** para autenticación
- **bcrypt** para cifrado de contraseñas
- **Docker** (opcional) para contenedorizar PostgreSQL

---

## 🚀 Requisitos

- Node.js v18+ (recomendado v20 o superior)
- PostgreSQL (local o Docker)
- Git
- npm

---

## ⚙️ Instalación y ejecución

1. **Clona el repositorio:**

```bash
git clone https://github.com/vmlillop/fleteahora-backend.git
cd fleteahora-backend
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Crea y configura tu archivo `.env`:**

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fleteahora"
JWT_SECRET="clave_secreta_segura"
```

4. **Ejecuta las migraciones:**

```bash
npx prisma migrate dev --name init
```

5. **Inicia el servidor:**

```bash
npm start
```

---

## 📦 Endpoints principales

| Método | Ruta                        | Descripción                         |
|--------|-----------------------------|-------------------------------------|
| POST   | `/api/usuarios/register`    | Registro de usuario                 |
| POST   | `/api/usuarios/login`       | Autenticación y entrega de token    |
| GET    | `/api/fletes/mis-fletes`    | Ver fletes del usuario autenticado  |
| POST   | `/api/fletes`               | Crear un nuevo flete                |
| POST   | `/api/evaluaciones`         | Evaluar un flete                    |

Todos los endpoints protegidos requieren el header:

```
Authorization: Bearer <token>
```

---

## 🐳 PostgreSQL con Docker (opcional)

Si no tienes PostgreSQL local, puedes levantarlo con Docker:

```bash
docker-compose up -d
```

---

## 👤 Autor

- **Víctor Lillo**  
  Estudiante de Ingeniería en Computación e Informática  
  Universidad Andrés Bello

---

## 📝 Licencia

Este proyecto se entrega con fines académicos y puede ser reutilizado bajo atribución.

---