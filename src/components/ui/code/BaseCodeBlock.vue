<script setup lang="ts">
import { ref, computed } from 'vue'

interface CodeTab {
  label: string
  filename: string
  code: string
}

const props = defineProps<{
  tabs: CodeTab[]
}>()

const activeTab = ref(0)
const copied = ref(false)

const currentTab = computed(() => props.tabs[activeTab.value])

async function copyCode() {
  await navigator.clipboard.writeText(currentTab.value.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
    <!-- Header: Tabs + Copy -->
    <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
      <!-- Tabs -->
      <div class="flex items-center gap-1">
        <button
          v-for="(tab, i) in tabs"
          :key="i"
          type="button"
          class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
          :class="activeTab === i
            ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'"
          @click="activeTab = i"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Filename + Copy -->
      <div class="flex items-center gap-3">
        <span class="text-xs text-gray-400 dark:text-gray-500 font-mono hidden sm:block">
          {{ currentTab.filename }}
        </span>
        <button
          type="button"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
          :class="copied
            ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400'
            : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'"
          @click="copyCode"
        >
          <!-- Copy icon -->
          <svg v-if="!copied" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/>
          </svg>
          <!-- Check icon -->
          <svg v-else class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          {{ copied ? '¡Copiado!' : 'Copiar' }}
        </button>
      </div>
    </div>

    <!-- Code -->
    <div class="bg-gray-950 overflow-auto max-h-[500px]">
      <pre class="p-5 text-sm font-mono text-gray-100 leading-relaxed whitespace-pre"><code>{{ currentTab.code }}</code></pre>
    </div>
  </div>
</template>
