<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMoon,
  faSun,
  faLayerGroup,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'
import { computed } from 'vue'

const route = useRoute()
const { isDark, toggleTheme } = useTheme()

const isHome = computed(() => route.path === '/')
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/5"
      />
      <div
        class="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-600/5"
      />
    </div>

    <header
      class="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3">
          <RouterLink
            to="/"
            class="flex items-center gap-3 transition hover:opacity-90"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-sm dark:bg-white dark:text-gray-900"
            >
              <FontAwesomeIcon :icon="faLayerGroup" class="h-5 w-5" />
            </div>

            <div>
              <h1 class="text-lg font-extrabold tracking-tight">Flowbite Vue UI</h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Catálogo de componentes · Vue 3 · TypeScript · Tailwind 4
              </p>
            </div>
          </RouterLink>
        </div>

        <div class="flex items-center gap-3">
          <RouterLink
            v-if="!isHome"
            to="/"
            class="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <FontAwesomeIcon :icon="faArrowLeft" class="h-4 w-4" />
            Volver
          </RouterLink>

          <button
            type="button"
            role="switch"
            :aria-checked="isDark"
            aria-label="Alternar modo oscuro"
            class="relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            :class="isDark ? 'bg-indigo-600' : 'bg-amber-400'"
            @click="toggleTheme"
          >
            <!-- Sol (izquierda) — visible en modo oscuro -->
            <FontAwesomeIcon
              :icon="faSun"
              class="absolute left-1.5 h-3.5 w-3.5 text-white transition-opacity duration-300"
              :class="isDark ? 'opacity-100' : 'opacity-0'"
            />
            <!-- Luna (derecha) — visible en modo claro -->
            <FontAwesomeIcon
              :icon="faMoon"
              class="absolute right-1.5 h-3.5 w-3.5 text-white transition-opacity duration-300"
              :class="isDark ? 'opacity-0' : 'opacity-100'"
            />
            <!-- Círculo deslizante -->
            <span
              aria-hidden="true"
              class="inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300"
              :class="isDark ? 'translate-x-8' : 'translate-x-1'"
            />
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-10">
      <RouterView />
    </main>
  </div>
</template>