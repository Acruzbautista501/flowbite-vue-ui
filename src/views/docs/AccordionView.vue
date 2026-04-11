<script setup lang="ts">
import { ref } from 'vue'
import BaseAccordion from '@/components/ui/accordion/BaseAccordion.vue'
import type { AccordionItem } from '@/interfaces/ui/accordion/Accordion'
import BaseCodeBlock from '@/components/ui/code/BaseCodeBlock.vue'

import componentSrc from '@/components/ui/accordion/BaseAccordion.vue?raw'
import composableSrc from '@/composables/ui/accordion/useAccordion.ts?raw'
import interfaceSrc from '@/interfaces/ui/accordion/Accordion.ts?raw'

const codeTabs = [
  { label: 'Componente', filename: 'BaseAccordion.vue', code: componentSrc },
  { label: 'Composable', filename: 'useAccordion.ts', code: composableSrc },
  { label: 'Interface', filename: 'Accordion.ts', code: interfaceSrc },
]

const defaultItems = ref<AccordionItem[]>([
  {
    id: 'default-1',
    title: '¿Qué es Flowbite?',
    content:
      'Flowbite es una biblioteca de código abierto de componentes interactivos construida sobre Tailwind CSS, que incluye botones, menús desplegables, modales, barras de navegación y más.',
    open: true,
  },
  {
    id: 'default-2',
    title: '¿Hay un archivo de Figma disponible?',
    content:
      'Flowbite se conceptualiza y diseña primero en Figma, por lo que todo lo que ves en la biblioteca tiene un equivalente de diseño en el archivo de Figma.',
  },
  {
    id: 'default-3',
    title: '¿Cuáles son las diferencias entre Flowbite y Tailwind UI?',
    content:
      'La principal diferencia es que Flowbite es de código abierto bajo la licencia MIT, mientras que Tailwind UI es un producto de pago.',
  },
])

const cardItems = ref<AccordionItem[]>([
  {
    id: 'card-1',
    title: '¿Qué es Flowbite?',
    content: 'Flowbite te ayuda a construir interfaces más rápido con Tailwind CSS.',
    open: true,
  },
  {
    id: 'card-2',
    title: '¿Hay un archivo de Figma disponible?',
    content: 'Sí, Flowbite también proporciona un sistema de diseño en Figma.',
  },
  {
    id: 'card-3',
    title: '¿Cuáles son las diferencias?',
    content: 'Flowbite se enfoca en componentes reutilizables y código abierto.',
  },
])

const alwaysOpenItems = ref<AccordionItem[]>([
  {
    id: 'open-1',
    title: '¿Qué es Flowbite?',
    content: 'Flowbite es una biblioteca de componentes de código abierto.',
    open: true,
    icon: 'question',
  },
  {
    id: 'open-2',
    title: '¿Hay un archivo de Figma disponible?',
    content: 'Sí, hay un sistema de diseño disponible.',
    icon: 'question',
  },
  {
    id: 'open-3',
    title: '¿Cuáles son las diferencias?',
    content: 'Tailwind UI es de pago, el núcleo de Flowbite es código abierto.',
    icon: 'question',
  },
])

const colorItems = ref<AccordionItem[]>([
  {
    id: 'color-1',
    title: '¿Qué es Flowbite?',
    content: 'Flowbite es una biblioteca de código abierto.',
    open: true,
  },
  {
    id: 'color-2',
    title: '¿Hay un archivo de Figma disponible?',
    content: 'Sí, Flowbite tiene un sistema de diseño en Figma.',
  },
  {
    id: 'color-3',
    title: '¿Cuáles son las diferencias?',
    content: 'Principalmente el tipo de licencia y la filosofía de diseño.',
  },
])

const flushItems = ref<AccordionItem[]>([
  {
    id: 'flush-1',
    title: '¿Qué es Flowbite?',
    content: 'Flowbite es una biblioteca de código abierto.',
    open: true,
  },
  {
    id: 'flush-2',
    title: '¿Hay un archivo de Figma disponible?',
    content: 'Sí, Flowbite tiene un sistema de diseño en Figma.',
  },
  {
    id: 'flush-3',
    title: '¿Cuáles son las diferencias?',
    content: 'Principalmente el tipo de licencia y la filosofía de diseño.',
  },
])

const arrowItems = ref<AccordionItem[]>([
  {
    id: 'arrow-1',
    title: 'Acordeón sin flecha',
    content: 'Este elemento del acordeón oculta la flecha por defecto.',
    open: true,
    icon: 'none',
  },
  {
    id: 'arrow-2',
    title: 'Acordeón con otro icono',
    content: 'También puedes personalizar el área del icono.',
    icon: 'question',
  },
  {
    id: 'arrow-3',
    title: 'Acordeón sin rotación de flecha',
    content: 'La flecha es visible pero la rotación está desactivada.',
  },
])

const nestedParent = ref<AccordionItem[]>([
  {
    id: 'nested-parent-1',
    title: '¿Qué es Flowbite?',
    content: 'Este elemento contiene otro acordeón anidado.',
    open: true,
  },
  {
    id: 'nested-parent-2',
    title: '¿Cuáles son las diferencias entre Flowbite y Tailwind UI?',
    content: 'El soporte para acordeones anidados está disponible.',
  },
])

const nestedChild = ref<AccordionItem[]>([
  {
    id: 'nested-child-1',
    title: 'Anidado: ¿Qué es Flowbite?',
    content: 'Contenido del elemento de acordeón anidado.',
    open: true,
  },
  {
    id: 'nested-child-2',
    title: 'Anidado: ¿Hay un archivo de Figma disponible?',
    content: 'Sí, lo hay.',
  },
  {
    id: 'nested-child-3',
    title: 'Anidado: ¿Cuáles son las diferencias?',
    content: 'Flowbite está más orientado a componentes.',
  },
])
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <div class="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">
          Acordeón
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Componente de acordeón inspirado en Flowbite, hecho con Vue 3 + TypeScript + Tailwind.
        </p>
      </div>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Acordeón por defecto</h2>
        <BaseAccordion :items="defaultItems" variant="default" mode="collapse" />
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Tarjetas separadas</h2>
        <BaseAccordion :items="cardItems" variant="card" mode="collapse" />
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Siempre abierto</h2>
        <BaseAccordion :items="alwaysOpenItems" variant="default" mode="open" />
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Opciones de color</h2>
        <BaseAccordion :items="colorItems" variant="color" mode="collapse" />
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Acordeón tipo "Flush"</h2>
        <BaseAccordion :items="flushItems" variant="flush" mode="collapse" />
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Estilo de flecha</h2>
        <div class="space-y-6">
          <BaseAccordion
            :items="[arrowItems[0]]"
            variant="flush"
            mode="collapse"
            :arrow="false"
          />

          <BaseAccordion
            :items="[arrowItems[1]]"
            variant="flush"
            mode="collapse"
          />

          <BaseAccordion
            :items="[arrowItems[2]]"
            variant="flush"
            mode="collapse"
            :rotate-icon="false"
          />
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Acordeones anidados</h2>

        <BaseAccordion :items="nestedParent" variant="default" mode="collapse">
          <template #content-nested-parent-1>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300">
                Flowbite es una biblioteca de código abierto de componentes interactivos 
                construida sobre Tailwind CSS.
              </p>

              <BaseAccordion
                :items="nestedChild"
                variant="default"
                mode="collapse"
              />
            </div>
          </template>
        </BaseAccordion>
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