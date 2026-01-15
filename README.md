# Droppitec - Sitio Web

Sitio web moderno desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## 🎨 Paleta de Colores

- **Azul**: `#4b66f7`
- **Gris oscuro**: `#282a2b`
- **Gris claro**: `#d1d1d1`
- **Blanco**: `#eeefea`

## 🔤 Fuentes

El proyecto utiliza **Roboto** de Google Fonts como fuente por defecto para todo el sitio. La fuente se carga automáticamente desde Google Fonts, no requiere instalación adicional.

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
droppitec-site/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Página principal
│   ├── fonts.ts             # Configuración de fuentes
│   └── globals.css          # Estilos globales
├── components/
│   ├── NavHeader.tsx        # Navegación principal
│   ├── HeroSection.tsx      # Sección hero
│   ├── ServicesSection.tsx  # Sección de servicios
│   ├── SuccessCasesSection.tsx # Casos de éxito
│   └── ContactForm.tsx      # Formulario de contacto
└── public/
    └── fonts/               # Archivos de fuentes (crear esta carpeta)
```

## ✨ Características

- ✅ Navegación con scroll suave
- ✅ Diseño responsive
- ✅ Animaciones y transiciones suaves
- ✅ Patrones de fondo decorativos con SVG
- ✅ Formulario de contacto funcional
- ✅ Optimizado para SEO

## 📝 Secciones

1. **Nav Header**: Navegación fija con scroll suave a cada sección
2. **Hero Section**: Título principal y subtítulo con patrones de fondo
3. **Servicios**: Grid de servicios con iconos y descripciones
4. **Casos de Éxito**: Muestra de proyectos realizados
5. **Contacto**: Formulario de contacto con validación

## 🛠️ Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- React 18
