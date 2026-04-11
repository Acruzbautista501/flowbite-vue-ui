<script setup lang="ts">
import BaseAlert from '@/components/ui/alert/BaseAlert.vue'
import { ref } from 'vue'
import BaseCodeBlock from '@/components/ui/code/BaseCodeBlock.vue'

import componentSrc from '@/components/ui/alert/BaseAlert.vue?raw'
import composableSrc from '@/composables/ui/alert/useAlert.ts?raw'
import interfaceSrc from '@/interfaces/ui/alert/Alert.ts?raw'

const codeTabs = [
  { label: 'Componente', filename: 'BaseAlert.vue', code: componentSrc },
  { label: 'Composable', filename: 'useAlert.ts', code: composableSrc },
  { label: 'Interface', filename: 'Alert.ts', code: interfaceSrc },
]

const showInfo = ref(true)
const showDanger = ref(true)
const showSuccess = ref(true)
const showWarning = ref(true)
const showDark = ref(true)
</script>

<template>
  <div class="min-h-screen bg-white px-6 py-10 text-gray-900 dark:bg-gray-950 dark:text-white">
    <div class="mx-auto max-w-5xl space-y-10">
      <div>
        <h1 class="mb-2 text-3xl font-bold">Alertas</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Componente de alertas inspirado en Flowbite, hecho con Vue 3 + TypeScript + Tailwind.
        </p>
      </div>

      <!-- Default -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Alertas por defecto</h2>

        <BaseAlert variant="info" title="¡Alerta de información!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert variant="danger" title="¡Alerta de peligro!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert variant="success" title="¡Alerta de éxito!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert variant="warning" title="¡Alerta de advertencia!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert variant="dark" title="¡Alerta oscura!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
      </section>

      <!-- With icon -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Alertas with ícono</h2>

        <BaseAlert icon variant="info" title="¡Alerta de información!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon variant="danger" title="¡Alerta de peligro!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon variant="success" title="¡Alerta de éxito!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon variant="warning" title="¡Alerta de advertencia!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon variant="dark" title="¡Alerta oscura!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
      </section>

      <!-- Bordered -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Alertas con borde</h2>

        <BaseAlert icon border variant="info" title="¡Alerta de información!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon border variant="danger" title="¡Alerta de peligro!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon border variant="success" title="¡Alerta de éxito!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon border variant="warning" title="¡Alerta de advertencia!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
        <BaseAlert icon border variant="dark" title="¡Alerta oscura!" description="Haz algunos cambios e intenta enviarlo de nuevo." />
      </section>

      <!-- List -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Alertas con lista</h2>

        <BaseAlert icon border variant="info" title="Asegúrate de que se cumplan estos requisitos:">
          <ul class="mt-2 list-disc space-y-1 ps-5">
            <li>Al menos 10 caracteres (y hasta un máximo de 100)</li>
            <li>Al menos una letra minúscula</li>
            <li>Inclusión de al menos un carácter especial, ej. ! @ # ?</li>
          </ul>
        </BaseAlert>
      </section>

      <!-- Dismissible -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Alertas descartables</h2>

        <BaseAlert v-model="showInfo" dismissible icon variant="info">
          Una simple alerta de información con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert v-model="showDanger" dismissible icon variant="danger">
          Una simple alerta de peligro con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert v-model="showSuccess" dismissible icon variant="success">
          Una simple alerta de éxito con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert v-model="showWarning" dismissible icon variant="warning">
          Una simple alerta de advertencia con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert v-model="showDark" dismissible icon variant="dark">
          Una simple alerta oscura con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>
      </section>

      <!-- Border Accent -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Borde acentuado</h2>

        <BaseAlert icon dismissible borderAccent variant="info">
          Una simple alerta de información con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert icon dismissible borderAccent variant="danger">
          Una simple alerta de peligro con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert icon dismissible borderAccent variant="success">
          Una simple alerta de éxito con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert icon dismissible borderAccent variant="warning">
          Una simple alerta de advertencia con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>

        <BaseAlert icon dismissible borderAccent variant="dark">
          Una simple alerta oscura con un
          <a href="#" class="font-medium underline hover:no-underline">enlace de ejemplo</a>.
          Haz clic si quieres.
        </BaseAlert>
      </section>

      <!-- Additional content -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Contenido adicional</h2>

        <BaseAlert icon border dismissible variant="info" title="Esta es una alerta de información">
          <template #default>
            <p class="mt-2">
              Aquí va más información sobre esta alerta. Este texto de ejemplo es un poco más largo 
              para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
            </p>
          </template>

          <template #actions="{ actionButtonClasses }">
            <button type="button" :class="actionButtonClasses">
              Ver más
            </button>
          </template>
        </BaseAlert>

        <BaseAlert icon border dismissible variant="danger" title="Esta es una alerta de peligro">
          <template #default>
            <p class="mt-2">
              Aquí va más información sobre esta alerta de peligro. Es útil para errores, bloqueos o mensajes críticos.
            </p>
          </template>

          <template #actions="{ actionButtonClasses }">
            <button type="button" :class="actionButtonClasses">
              Ver más
            </button>
          </template>
        </BaseAlert>

        <BaseAlert icon border dismissible variant="success" title="Esta es una alerta de éxito">
          <template #default>
            <p class="mt-2">
              Aquí va más información sobre esta alerta de éxito. Ideal para acciones completadas y confirmaciones.
            </p>
          </template>

          <template #actions="{ actionButtonClasses }">
            <button type="button" :class="actionButtonClasses">
              Ver más
            </button>
          </template>
        </BaseAlert>
      </section>

      <!-- Announcement -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Alertas de anuncios</h2>

        <BaseAlert inline border variant="info" title="¡Buen trabajo! Has aceptado esto">
          <template #badge>
            <span class="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-800 dark:text-blue-200">
              Nuevo
            </span>
          </template>

          ¡Buen trabajo! Has aceptado este mensaje de alerta 
          <a href="#" class="font-medium underline hover:no-underline">significativo</a>.
        </BaseAlert>

        <BaseAlert inline border variant="danger">
          <template #badge>
            <span class="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-800 dark:text-red-200">
              Nuevo
            </span>
          </template>

          ¡Buen trabajo! Has aceptado este mensaje de alerta 
          <a href="#" class="font-medium underline hover:no-underline">significativo</a>.
        </BaseAlert>

        <BaseAlert inline border variant="success">
          <template #badge>
            <span class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-800 dark:text-green-200">
              Nuevo
            </span>
          </template>

          ¡Buen trabajo! Has aceptado este mensaje de alerta 
          <a href="#" class="font-medium underline hover:no-underline">significativo</a>.
        </BaseAlert>

        <BaseAlert inline border variant="warning">
          <template #badge>
            <span class="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200">
              Nuevo
            </span>
          </template>

          ¡Buen trabajo! Has aceptado este mensaje de alerta 
          <a href="#" class="font-medium underline hover:no-underline">significativo</a>.
        </BaseAlert>

        <BaseAlert inline border variant="dark">
          <template #badge>
            <span class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              Nuevo
            </span>
          </template>

          ¡Buen trabajo! Has aceptado este mensaje de alerta 
          <a href="#" class="font-medium underline hover:no-underline">significativo</a>.
        </BaseAlert>
      </section>

      <!-- Source Code -->
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