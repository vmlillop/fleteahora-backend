# 🌐 FleteAhora - Frontend

Este es el proyecto **frontend** de la plataforma FleteAhora, desarrollado con **React.js**.

---

## 🧱 Tecnologías principales

- React.js (Create React App)
- React Router (para navegación)
- Axios (para consumo de API REST)
- Tailwind CSS (opcional para estilos)
- Context API o Redux (según necesidades futuras)

---

## 🚀 Instalación

Clona el repositorio y cambia a la rama frontend:

```bash
git checkout frontend
cd frontend
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm start
```

Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Estructura del proyecto

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🔑 Variables de entorno

Crea un archivo `.env` con la URL base del backend:

```env
REACT_APP_API_URL=http://localhost:3001
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.