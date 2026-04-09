<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBadge } from '@/composables/ui/badge/useBadge'
import type { BadgeEmits, BadgeProps } from '@/interfaces/ui/badge/Badge'

const props = withDefaults(defineProps<BadgeProps>(), {
  label: 'Badge',
  variant: 'default',
  size: 'sm',
  rounded: 'default',
  border: false,
  href: undefined,
  iconOnly: false,
  dot: false,
  dismissible: false,
  avatar: undefined,
  disabled: false,
})

const emit = defineEmits<BadgeEmits>()

const visible = ref(true)

const { baseClasses, dotClasses } = useBadge(props)

const tag = computed(() => (props.href ? 'a' : 'span'))

const handleDismiss = () => {
  visible.value = false
  emit('dismiss')
}
</script>

<template>
  <component
    :is="tag"
    v-if="visible"
    :href="href"
    :class="baseClasses"
  >
    <!-- Avatar -->
    <img
      v-if="avatar"
      :src="avatar"
      alt="avatar"
      class="w-4 h-4 rounded-full object-cover"
    />

    <!-- Dot -->
    <span
      v-if="dot"
      class="w-2 h-2 rounded-full"
      :class="dotClasses"
    />

    <!-- Icon slot -->
    <slot name="icon" />

    <!-- Label -->
    <span v-if="!iconOnly && label">
      {{ label }}
    </span>

    <!-- Default slot -->
    <slot />

    <!-- Dismiss -->
    <button
      v-if="dismissible"
      type="button"
      class="inline-flex items-center justify-center rounded-sm p-0.5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      aria-label="Remove badge"
      @click="handleDismiss"
    >
      <svg
        class="w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </component>
</template>