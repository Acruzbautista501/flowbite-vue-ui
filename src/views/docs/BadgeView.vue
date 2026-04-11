<script setup lang="ts">
import BaseBadge from '@/components/ui/badge/BaseBadge.vue'
import BaseCodeBlock from '@/components/ui/code/BaseCodeBlock.vue'

import componentSrc from '@/components/ui/badge/BaseBadge.vue?raw'
import composableSrc from '@/composables/ui/badge/useBadge.ts?raw'
import interfaceSrc from '@/interfaces/ui/badge/Badge.ts?raw'

const codeTabs = [
  { label: 'Componente', filename: 'BaseBadge.vue', code: componentSrc },
  { label: 'Composable', filename: 'useBadge.ts', code: composableSrc },
  { label: 'Interface', filename: 'Badge.ts', code: interfaceSrc },
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white p-8">
    <div class="max-w-6xl mx-auto space-y-10">
      <div>
        <h1 class="text-3xl font-bold mb-2">Badge Component</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Componente Badge inspirado en Flowbite con soporte para dark mode.
        </p>
      </div>

      <!-- Default -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Default badges</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="Brand" variant="default" />
          <BaseBadge label="Alternative" variant="alternative" />
          <BaseBadge label="Gray" variant="gray" />
          <BaseBadge label="Danger" variant="danger" />
          <BaseBadge label="Success" variant="success" />
          <BaseBadge label="Warning" variant="warning" />
        </div>
      </section>

      <!-- Bordered -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Bordered badges</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="Brand" variant="default" border />
          <BaseBadge label="Alternative" variant="alternative" border />
          <BaseBadge label="Gray" variant="gray" border />
          <BaseBadge label="Danger" variant="danger" border />
          <BaseBadge label="Success" variant="success" border />
          <BaseBadge label="Warning" variant="warning" border />
        </div>
      </section>

      <!-- Large -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Large badges</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="Brand" variant="default" size="md" />
          <BaseBadge label="Alternative" variant="alternative" size="md" />
          <BaseBadge label="Gray" variant="gray" size="md" />
          <BaseBadge label="Danger" variant="danger" size="md" />
          <BaseBadge label="Success" variant="success" size="md" />
          <BaseBadge label="Warning" variant="warning" size="md" />
        </div>
      </section>

      <!-- Pill -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Pill badges</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="Brand" variant="default" rounded="pill" />
          <BaseBadge label="Alternative" variant="alternative" rounded="pill" />
          <BaseBadge label="Gray" variant="gray" rounded="pill" />
          <BaseBadge label="Danger" variant="danger" rounded="pill" />
          <BaseBadge label="Success" variant="success" rounded="pill" />
          <BaseBadge label="Warning" variant="warning" rounded="pill" />
        </div>
      </section>

      <!-- As links -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Badges as links</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="Brand" variant="default" border href="#" />
          <BaseBadge label="Alternative" variant="alternative" border href="#" />
          <BaseBadge label="Gray" variant="gray" border href="#" />
          <BaseBadge label="Danger" variant="danger" border href="#" />
          <BaseBadge label="Success" variant="success" border href="#" />
          <BaseBadge label="Warning" variant="warning" border href="#" />
        </div>
      </section>

      <!-- With icon -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Badges with icon</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="2 mins ago" variant="default" border>
            <template #icon>
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>

          <BaseBadge label="2 mins ago" variant="success" border size="md">
            <template #icon>
              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>
        </div>
      </section>

      <!-- Icon only -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Icon only badges</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge variant="default" border iconOnly rounded="full">
            <template #icon>
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>

          <BaseBadge variant="alternative" border iconOnly rounded="full">
            <template #icon>
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>

          <BaseBadge variant="gray" border iconOnly rounded="full">
            <template #icon>
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>

          <BaseBadge variant="danger" border iconOnly rounded="full">
            <template #icon>
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>


          <BaseBadge variant="success" border iconOnly rounded="full">
            <template #icon>
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>

          <BaseBadge variant="warning" border iconOnly rounded="full">
            <template #icon>
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </template>
          </BaseBadge>
        </div>
      </section>

      <!-- Dot -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Badges with dot</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="2 mins ago" variant="default" border dot />
          <BaseBadge label="2 mins ago" variant="alternative" border dot />
          <BaseBadge label="2 mins ago" variant="gray" border dot />
          <BaseBadge label="2 mins ago" variant="danger" border dot />
          <BaseBadge label="2 mins ago" variant="success" border dot />
          <BaseBadge label="2 mins ago" variant="warning" border dot />
        </div>
      </section>

      <!-- Dismissible -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Dismissible badges (chips)</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge label="Brand" variant="default" border dismissible />
          <BaseBadge label="Alternative" variant="alternative" border dismissible />
          <BaseBadge label="Gray" variant="gray" border dismissible />
          <BaseBadge label="Danger" variant="danger" border dismissible />
          <BaseBadge label="Success" variant="success" border dismissible />
          <BaseBadge label="Warning" variant="warning" border dismissible />
        </div>
      </section>

      <!-- Avatar -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Chips with avatar</h2>
        <div class="flex flex-wrap gap-3">
          <BaseBadge
            label="Aldair"
            variant="default"
            border
            dismissible
            avatar="https://i.pravatar.cc/40?img=5"
          />
          <BaseBadge
            label="Vue Dev"
            variant="success"
            border
            dismissible
            avatar="https://i.pravatar.cc/40?img=8"
          />
        </div>
      </section>

      <!-- Notification -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Notification badge</h2>
        <div>
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 transition"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>

            <span
              class="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 border-2 border-white dark:border-gray-900 rounded-full"
            >
              20
            </span>
          </button>
        </div>
      </section>

      <!-- Button with badge -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Button with badge</h2>
        <div>
          <button
            type="button"
            class="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Messages
            <span
              class="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-white bg-red-600 rounded-full"
            >
              2
            </span>
          </button>
        </div>
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