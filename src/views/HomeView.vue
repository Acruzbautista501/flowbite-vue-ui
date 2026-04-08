<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { componentsList } from '@/data/components'
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-3">
      <h2 class="text-4xl font-black tracking-tight sm:text-5xl">
        Componentes
      </h2>
      <p class="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
        Explora una biblioteca de componentes de interfaz reutilizables, construidos con 
        Vue 3, TypeScript, Tailwind CSS 4 y un diseño inspirado en el ecosistema de Flowbite.
      </p>
    </div>

    <div class="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
      <RouterLink
        v-for="component in componentsList"
        :key="component.name"
        :to="component.route"
        class="group block"
      >
        <div class="space-y-5">
          <!-- Preview Card -->
          <div
            class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div
              class="flex aspect-[4/2.1] items-center justify-center bg-slate-200/70 p-4 dark:bg-slate-800/70"
            >
              <img
                :src="component.image"
                :alt="component.name"
                class="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="space-y-2 px-2">
            <h3
              class="text-2xl font-black tracking-tight text-slate-900 transition group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400"
            >
              {{ component.name }}
            </h3>

            <p class="text-sm leading-7 text-slate-600 dark:text-slate-400">
              {{ component.description }}
            </p>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>