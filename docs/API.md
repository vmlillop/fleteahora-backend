# FleteAhora API - Documentación de Endpoints

## Autenticación

### POST /auth/register
Registra un nuevo usuario.

**Body JSON:**
```json
{
  "nombre": "Juan",
  "email": "juan@mail.com",
  "password": "123456"
}
```

### POST /auth/login
Autentica al usuario y entrega un token JWT.

**Body JSON:**
```json
{
  "email": "juan@mail.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "token": "jwt_token_aquí"
}
```

---

## Usuarios

### GET /usuarios/perfil
Obtiene los datos del perfil del usuario autenticado.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

---

## Fletes

### POST /fletes
Crea un nuevo flete.

**Body JSON:**
```json
{
  "origen": "Santiago",
  "destino": "Valparaíso",
  "tipoCarga": "Electrodomésticos",
  "peso": 120,
  "fecha": "2025-08-05"
}
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

### GET /fletes
Obtiene todos los fletes disponibles.

### GET /fletes/mis-fletes
Obtiene los fletes creados por el usuario autenticado.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

---

## Evaluaciones

### POST /evaluaciones
Permite evaluar a un transportista después del servicio.

**Body JSON:**
```json
{
  "fleteId": "abc123",
  "puntaje": 4,
  "comentario": "Buen servicio, llegó a tiempo."
}
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

---

## Seguridad

Todos los endpoints protegidos requieren token JWT en el header:

```
Authorization: Bearer <jwt_token>
```

---

## Respuestas comunes

### 401 Unauthorized
Cuando el token es inválido o no está presente.

### 400 Bad Request
Faltan campos requeridos o hay datos inválidos.

### 500 Internal Server Error
Error inesperado del servidor.