
# FleteAhora API - Documentación de Endpoints

## Auth

### POST /auth/register
Registra un nuevo usuario.

**Body:**
```json
{
  "nombre": "Juan",
  "email": "juan@mail.com",
  "password": "123456"
}
```

### POST /auth/login
Autentica un usuario.

**Body:**
```json
{
  "email": "juan@mail.com",
  "password": "123456"
}
```

---

## Fletes

### POST /fletes
Crea un nuevo flete.

### GET /fletes
Obtiene todos los fletes.

---

## Evaluaciones

### POST /evaluaciones
Crea una evaluación de transportista.

---

## Seguridad
- Requiere autenticación JWT para endpoints privados.
