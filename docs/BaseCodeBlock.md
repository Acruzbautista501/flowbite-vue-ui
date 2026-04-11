# BaseCodeBlock

Componente reutilizable para mostrar código fuente con tabs y botón de copiar al portapapeles.  
Ubicación: `src/components/ui/code/BaseCodeBlock.vue`

---

## Props

| Prop   | Tipo        | Requerido | Descripción                              |
|--------|-------------|-----------|------------------------------------------|
| `tabs` | `CodeTab[]` | Sí        | Array de archivos a mostrar en el bloque |

### Tipo `CodeTab`

```ts
interface CodeTab {
  label:    string  // Texto del botón tab
  filename: string  // Nombre mostrado en el header junto al botón copiar
  code:     string  // Contenido del archivo (importado con ?raw)
}
```

---

## Uso básico

### 1. Importar el componente y los archivos fuente

En el `<script setup>` de la vista de documentación, importa el componente y cada archivo fuente usando el sufijo `?raw` de Vite. Esto importa el contenido del archivo como un `string` puro, siempre sincronizado con el archivo real.

```ts
import BaseCodeBlock from '@/components/ui/code/BaseCodeBlock.vue'

import componentSrc  from '@/components/ui/button/BaseButton.vue?raw'
import composableSrc from '@/composables/ui/button/useButton.ts?raw'
import interfaceSrc  from '@/interfaces/ui/button/Button.ts?raw'

const codeTabs = [
  { label: 'Componente', filename: 'BaseButton.vue', code: componentSrc },
  { label: 'Composable', filename: 'useButton.ts',   code: composableSrc },
  { label: 'Interface',  filename: 'Button.ts',      code: interfaceSrc },
]
```

### 2. Agregar la sección en el template

Al final del contenedor principal, antes del cierre del `div` o `section` más externo:

```html
<!-- Source Code -->
<section class="space-y-4">
  <h2 class="text-2xl font-semibold">Código fuente</h2>
  <p class="text-gray-600 dark:text-gray-400 text-sm">
    Copia los archivos que necesites para usar este componente en tu proyecto.
  </p>
  <BaseCodeBlock :tabs="codeTabs" />
</section>
```

---

## Componente con múltiples archivos

Cuando un componente tiene más de un archivo `.vue` o más de un composable, agrega tantos objetos como necesites al array `codeTabs`:

```ts
import avatarSrc       from '@/components/ui/avatar/BaseAvatar.vue?raw'
import avatarGroupSrc  from '@/components/ui/avatar/BaseAvatarGroup.vue?raw'
import useAvatarSrc    from '@/composables/ui/avatar/useAvatar.ts?raw'
import useGroupSrc     from '@/composables/ui/avatar/useAvatarGroup.ts?raw'
import interfaceSrc    from '@/interfaces/ui/avatar/Avatar.ts?raw'

const codeTabs = [
  { label: 'BaseAvatar.vue',      filename: 'BaseAvatar.vue',      code: avatarSrc },
  { label: 'BaseAvatarGroup.vue', filename: 'BaseAvatarGroup.vue', code: avatarGroupSrc },
  { label: 'useAvatar.ts',        filename: 'useAvatar.ts',        code: useAvatarSrc },
  { label: 'useAvatarGroup.ts',   filename: 'useAvatarGroup.ts',   code: useGroupSrc },
  { label: 'Avatar.ts',           filename: 'Avatar.ts',           code: interfaceSrc },
]
```

---

## Ejemplo completo de una vista de documentación

```vue
<script setup lang="ts">
import BaseButton from '@/components/ui/button/BaseButton.vue'
import BaseCodeBlock from '@/components/ui/code/BaseCodeBlock.vue'

import componentSrc  from '@/components/ui/button/BaseButton.vue?raw'
import composableSrc from '@/composables/ui/button/useButton.ts?raw'
import interfaceSrc  from '@/interfaces/ui/button/Button.ts?raw'

const codeTabs = [
  { label: 'Componente', filename: 'BaseButton.vue', code: componentSrc },
  { label: 'Composable', filename: 'useButton.ts',   code: composableSrc },
  { label: 'Interface',  filename: 'Button.ts',      code: interfaceSrc },
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white p-8">
    <div class="max-w-6xl mx-auto space-y-10">

      <!-- Encabezado -->
      <div>
        <h1 class="text-3xl font-bold mb-2">Button</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Descripción del componente.
        </p>
      </div>

      <!-- Ejemplos del componente -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Default</h2>
        <div class="flex flex-wrap gap-3">
          <BaseButton label="Click me" />
        </div>
      </section>

      <!-- Código fuente (siempre al final) -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Código fuente</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          Copia los archivos que necesites para usar este componente en tu proyecto.
        </p>
        <BaseCodeBlock :tabs="codeTabs" />
      </section>

    </div>
  </div>
</template>
```

---

## Notas

- **`?raw`** es una característica nativa de Vite. No requiere ninguna dependencia adicional ni configuración. Funciona con `.vue`, `.ts`, `.js` y cualquier otro tipo de archivo.
- El código mostrado **siempre está sincronizado** con el archivo real porque se importa directamente. No hay duplicación manual.
- El bloque de código tiene **scroll vertical** limitado a `500px` para no ocupar demasiado espacio en pantalla.
- El botón **"Copiar"** muestra "¡Copiado!" durante 2 segundos y regresa a su estado original automáticamente.
