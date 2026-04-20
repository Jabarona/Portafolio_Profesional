# Portafolio Profesional Moderno

Este es un portafolio web interactivo, dinámico y de alto rendimiento, diseñado para destacar habilidades y proyectos con una interfaz de usuario premium. Construido con las herramientas más modernas del ecosistema de React.

## 🚀 Tecnologías Utilizadas

- **Frontend Framework:** React 19 con Vite (TypeScript)
- **Estilos:** TailwindCSS (v4)
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Base de Datos (BaaS):** Firebase Firestore (para almacenar mensajes de contacto)
- **Servicio de Correo:** Web3Forms (para recibir notificaciones de contacto al email)

## ✨ Características Principales

1. **Diseño Premium y Responsivo:** Paleta de colores cuidada, uso de tipografías modernas y adaptabilidad a cualquier tamaño de pantalla.
2. **Animaciones Fluidas:** Transiciones de entrada, efectos de hover y micro-interacciones utilizando Framer Motion.
3. **Formulario de Contacto Totalmente Funcional:**
   - **Almacenamiento Persistente:** Los mensajes enviados se guardan en tiempo real en una base de datos NoSQL (Firebase Firestore).
   - **Notificaciones por Correo:** Al mismo tiempo que se guarda en la base de datos, el sistema envía un correo electrónico al propietario usando Web3Forms.
   - **Manejo de Estados:** Indicadores visuales de "Procesando..." y notificaciones de éxito/error.
4. **Optimización:** Migrado desde HTML estático a un sistema modular de componentes en React, listo para escalar.

## 🛠️ Instalación y Configuración Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone https://github.com/Jabarona/Portafolio_Profesional.git
cd Portafolio_Profesional
npm install
```

### 2. Configurar Variables de Entorno

El proyecto requiere credenciales para conectarse a Firebase y a Web3Forms. 
Debes crear un archivo `.env` en la raíz del proyecto (puedes basarte en `.env.example`) y completarlo con tus datos:

```env
# Configuración de Firebase (Consíguelos en tu Consola de Firebase > Project Settings)
VITE_FIREBASE_API_KEY="tu_api_key"
VITE_FIREBASE_AUTH_DOMAIN="tu_auth_domain"
VITE_FIREBASE_PROJECT_ID="tu_project_id"
VITE_FIREBASE_STORAGE_BUCKET="tu_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="tu_sender_id"
VITE_FIREBASE_APP_ID="tu_app_id"

# Configuración de Web3Forms (Consíguela en web3forms.com)
VITE_WEB3FORMS_ACCESS_KEY="tu_access_key"
```

### 3. Ejecutar el Servidor de Desarrollo

Una vez configuradas las variables de entorno, puedes iniciar la aplicación:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación corriendo.

## 📁 Estructura del Proyecto

```text
/
├── public/               # Assets estáticos
├── src/
│   ├── assets/           # Imágenes y recursos multimedia
│   ├── components/       # Componentes reutilizables de React (Contact, Navbar, etc.)
│   ├── lib/              # Configuraciones de librerías externas (Firebase)
│   ├── index.css         # Estilos globales y directivas de Tailwind
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Punto de entrada de la aplicación
├── .env.example          # Plantilla de variables de entorno
├── package.json          # Dependencias y scripts
├── tailwind.config.js    # (si aplica) Configuración del tema de Tailwind
└── vite.config.ts        # Configuración del bundler Vite
```

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo local con Hot Module Replacement (HMR).
- `npm run build`: Transpila TypeScript y construye el bundle optimizado para producción.
- `npm run preview`: Levanta un servidor local para previsualizar el build de producción.
- `npm run lint`: Ejecuta ESLint para buscar problemas en el código.
