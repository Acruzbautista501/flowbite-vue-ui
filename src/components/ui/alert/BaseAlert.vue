<script setup lang="ts">
import { computed } from 'vue'
import { useAlert } from '@/composables/ui/alert/useAlert'
import type {
  AlertEmits,
  AlertProps,
} from '@/interfaces/ui/alert/Alert'

const props = withDefaults(defineProps<AlertProps>(), {
  modelValue: true,
  variant: 'info',
  title: '',
  description: '',
  dismissible: false,
  icon: false,
  border: false,
  borderAccent: false,
  inline: false,
  rounded: 'lg',
})

const emit = defineEmits<AlertEmits>()

const isVisible = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const { wrapperClasses, contentClasses, closeButtonClasses, badgeClasses, actionButtonClasses } =
  useAlert(props)

const closeAlert = () => {
  isVisible.value = false
  emit('close')
}
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <div v-if="isVisible" :class="wrapperClasses" role="alert">
      <!-- Inline / announcement mode -->
      <template v-if="inline">
        <slot name="badge">
          <span :class="badgeClasses">New</span>
        </slot>

        <div class="text-sm">
          <slot>
            <span v-if="title" class="font-medium">{{ title }}</span>
            <span v-if="description" class="ms-1">{{ description }}</span>
          </slot>
        </div>

        <svg
          class="h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7" />
        </svg>
      </template>

      <!-- Normal mode -->
      <template v-else>
        <div :class="contentClasses">
          <!-- Icon -->
          <div v-if="icon" class="shrink-0 pt-0.5">
            <slot name="icon">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </slot>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <div v-if="$slots.title || title" class="mb-1 font-medium">
              <slot name="title">
                {{ title }}
              </slot>
            </div>

            <div v-if="$slots.default">
              <slot />
            </div>
            <p v-else-if="description">
              {{ description }}
            </p>

            <div v-if="$slots.actions" class="mt-4">
              <slot name="actions" :actionButtonClasses="actionButtonClasses" />
            </div>
          </div>

          <!-- Close -->
          <button
            v-if="dismissible"
            type="button"
            :class="closeButtonClasses"
            aria-label="Cerrar alerta"
            @click="closeAlert"
          >
            <span class="sr-only">Cerrar</span>
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </template>
    </div>
  </Transition>
</template>