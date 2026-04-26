# Portafolio Profesional Moderno

Este es un portafolio web interactivo, dinámico y de alto rendimiento, diseñado para destacar habilidades y proyectos con una interfaz de usuario premium. Construido con las herramientas más modernas del ecosistema de React.

## 🚀 Tecnologías Utilizadas

- **Frontend Framework:** React 19 con Vite (TypeScript)
- **Estilos:** TailwindCSS (v4)
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React & React Icons
- **Base de Datos (BaaS):** Firebase Firestore (para almacenar mensajes de contacto)
- **Servicio de Correo:** Web3Forms (para recibir notificaciones de contacto al email)

## ✨ Características Principales

1. **Soporte Multi-idioma (i18n):** Sistema de internacionalización nativo y ultra-rápido usando React Context que permite alternar entre Español e Inglés instantáneamente con botones en la barra de navegación. Recuerda la preferencia del usuario en `localStorage`.

2. **Gamificación Integrada (Snake Skills):** La sección principal cuenta con un mini-juego interactivo de la Serpiente (*Snake*). En lugar de simples listas de texto, el usuario atrapa iconos de tecnologías para armar un "stack" de habilidades, mostrando un resumen visual e interactivo al perder. Cuenta con controles táctiles por gestos (Swipe) para dispositivos móviles y teclado para escritorio.

3. **Showcase de Proyectos (Bento Grid):** Los proyectos destacados se presentan mediante una moderna cuadrícula "Bento", optimizando el espacio visual y ofreciendo una experiencia inmersiva. Se muestran enlaces al repositorio, código fuente y tecnologías utilizadas.

4. **Línea de Tiempo de Experiencia Profesional:** Una sección detallada de "Rastro de Carrera" que resalta roles de ingeniería orientados a impacto (Ej. Arquitecto Cloud, Ingeniero de Datos, Desarrollador Mobile), detallando de forma clara los logros y las arquitecturas manejadas en la industria real.

5. **Interacciones Dinámicas y Diseño Premium:** 
   - Fotografía de perfil interactiva que rota suavemente entre múltiples imágenes al hacer clic usando `framer-motion`.
   - Paleta de colores cuidada, estilo *glassmorphism*, uso de tipografías modernas y adaptabilidad total (Responsive Design) a cualquier dispositivo.

6. **Formulario de Contacto Totalmente Funcional:**
   - **Almacenamiento Persistente:** Los mensajes enviados se guardan en tiempo real en una base de datos NoSQL (Firebase Firestore).
   - **Notificaciones por Correo:** Se envía un correo electrónico al propietario usando Web3Forms al momento de recibir un nuevo mensaje.
   - **Manejo de Estados:** Indicadores visuales de carga, validación y notificaciones bilingües de éxito/error.

## ☁️ Arquitectura de Despliegue (CI/CD)

Este proyecto implementa un flujo de trabajo profesional de Integración y Despliegue Continuo (CI/CD) utilizando **GitHub Actions** y **Firebase Hosting**, separado en dos entornos:

- **Entorno de Pruebas (Staging):** Todos los cambios enviados a la rama `staging` se despliegan automáticamente en un servidor de pruebas privado, garantizando que las nuevas funcionalidades se validen antes de llegar al público.
- **Entorno de Producción:** Al fusionar (merge) los cambios aprobados hacia la rama `main`, la aplicación se construye y despliega automáticamente en el dominio principal oficial en vivo.

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
│   ├── components/       # Componentes reutilizables (SnakeGame, Navbar, Hero, etc.)
│   ├── context/          # Motor de idioma global (LanguageContext.tsx, translations.ts)
│   ├── lib/              # Configuraciones de integraciones externas (Firebase)
│   ├── index.css         # Estilos globales y utilidades de Tailwind
│   ├── App.tsx           # Componente principal envolviendo el Provider de idioma
│   └── main.tsx          # Punto de entrada de la aplicación
├── .env.example          # Plantilla de variables de entorno
├── package.json          # Dependencias y scripts
├── tailwind.config.js    # Configuración del tema de Tailwind
└── vite.config.ts        # Configuración del bundler Vite
```

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo local con Hot Module Replacement (HMR).
- `npm run build`: Transpila TypeScript y construye el bundle optimizado para producción.
- `npm run preview`: Levanta un servidor local para previsualizar el build de producción.
- `npm run lint`: Ejecuta ESLint para buscar problemas en el código.
