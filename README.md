<div align="center">

# Flowbite Vue UI

Catálogo personal de componentes UI construido con **Vue 3**, **TypeScript** y **Tailwind CSS 4**, inspirado en el sistema de diseño de Flowbite.  
Funciona como documentación interactiva y referencia de código para proyectos futuros.

![Vue](https://img.shields.io/badge/Vue-3.x-42b883?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646cff?style=flat-square&logo=vite&logoColor=white)

</div>

---

## ¿Qué es este proyecto?

Este repositorio es un **catálogo de componentes UI** de uso personal. Cada componente está documentado con ejemplos interactivos y su código fuente completo, listo para copiar y usar en cualquier proyecto Vue 3.

La arquitectura sigue un patrón consistente de tres capas:

```
Componente (.vue)  →  Composable (.ts)  →  Interface (.ts)
```

---

## Stack

| Herramienta | Versión | Rol |
|-------------|---------|-----|
| [Vue 3](https://vuejs.org/) | 3.x | Framework principal |
| [TypeScript](https://www.typescriptlang.org/) | 6.x | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilos utilitarios |
| [Vite](https://vite.dev/) | 8.x | Build tool |
| [Vue Router](https://router.vuejs.org/) | 5.x | Navegación entre vistas |
| [Flowbite](https://flowbite.com/) | 4.x | Sistema de diseño base |
| [Font Awesome](https://fontawesome.com/) | 7.x | Iconografía |

---

## Componentes disponibles

| Componente | Descripción | Ruta |
|------------|-------------|------|
| **Accordion** | Secciones expandibles con variantes y modos | `/docs/accordion` |
| **Alert** | Mensajes de estado con iconos y dismiss | `/docs/alert` |
| **Avatar** | Imágenes de perfil, iniciales y grupos | `/docs/avatar` |
| **Badge** | Etiquetas con variantes, tamaños y chips | `/docs/badge` |
| **Banner** | Barras de notificación prominentes | `/docs/banner` |
| **Bottom Navigation** | Navegación inferior para apps móviles | `/docs/bottom-navigation` |

Cada componente incluye:
- Vista previa interactiva con dark mode
- Código fuente completo con botón de copiar (Componente / Composable / Interface)

---

## Estructura del proyecto

```
src/
├── components/ui/        # Componentes reutilizables
│   ├── accordion/
│   ├── alert/
│   ├── avatar/
│   ├── badge/
│   ├── banner/
│   ├── bottom-navigation/
│   └── code/             # BaseCodeBlock (visualizador de código)
├── composables/ui/       # Lógica de cada componente (clases, estado)
├── interfaces/ui/        # Tipos y Props de TypeScript
├── views/
│   ├── HomeView.vue      # Galería principal
│   └── docs/             # Vista de documentación por componente
├── router/               # Rutas de la app
└── composables/
    └── useTheme.ts       # Toggle light / dark mode
```

---

## Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/Acruzbautista501/flowbite-vue-ui.git
cd flowbite-vue-ui

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

```bash
# Compilar para producción
npm run build
```

---

## Cómo agregar un nuevo componente

1. Crear los tres archivos del componente:

```
src/components/ui/[nombre]/Base[Nombre].vue
src/composables/ui/[nombre]/use[Nombre].ts
src/interfaces/ui/[nombre]/[Nombre].ts
```

2. Crear la vista de documentación en `src/views/docs/[Nombre]View.vue`

3. Registrar la ruta en `src/router/index.ts`

4. Agregar la tarjeta en `src/data/components.ts`

5. Incluir el bloque de código fuente en la vista usando `BaseCodeBlock`:

```ts
import BaseCodeBlock from '@/components/ui/code/BaseCodeBlock.vue'

import componentSrc  from '@/components/ui/[nombre]/Base[Nombre].vue?raw'
import composableSrc from '@/composables/ui/[nombre]/use[Nombre].ts?raw'
import interfaceSrc  from '@/interfaces/ui/[nombre]/[Nombre].ts?raw'

const codeTabs = [
  { label: 'Componente', filename: 'Base[Nombre].vue', code: componentSrc },
  { label: 'Composable', filename: 'use[Nombre].ts',   code: composableSrc },
  { label: 'Interface',  filename: '[Nombre].ts',      code: interfaceSrc },
]
```

> Consulta [`docs/BaseCodeBlock.md`](docs/BaseCodeBlock.md) para la guía completa de uso.

---

## Dark mode

El proyecto incluye soporte completo de dark mode con persistencia en `localStorage` y detección automática de la preferencia del sistema. Se gestiona mediante el composable `useTheme.ts`.

---

<div align="center">
  <sub>Construido con Vue 3 · TypeScript · Tailwind CSS 4</sub>
</div>
