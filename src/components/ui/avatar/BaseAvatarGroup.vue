<script setup lang="ts">
import BaseAvatar from './BaseAvatar.vue'
import { useAvatarGroup } from '../../../composables/ui/avatar/useAvatarGroup'
import type { AvatarGroupProps } from '../../../interfaces/ui/avatar/Avatar'

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  max: 4,
  size: 'lg',
  bordered: true,
  rounded: 'full',
  overflowLabel: '+',
})

const { visibleItems, hiddenCount } = useAvatarGroup(props)
</script>

<template>
  <div class="flex -space-x-4 rtl:space-x-reverse">
    <BaseAvatar
      v-for="(item, index) in visibleItems"
      :key="index"
      :src="item.src"
      :alt="item.alt || 'Avatar'"
      :initials="item.initials"
      :tooltip="item.tooltip"
      :size="size"
      :bordered="bordered"
      :rounded="rounded"
      :placeholder="item.src ? 'image' : 'initials'"
    />

    <div
      v-if="hiddenCount > 0"
      class="inline-flex items-center justify-center text-xs font-medium text-white bg-dark-strong border-2 border-buffer rounded-full"
      :class="{
        'w-10 h-10': size === 'lg',
        'w-8 h-8': size === 'md',
        'w-6 h-6': size === 'sm',
        'w-14 h-14': size === 'xl',
        'w-16 h-16': size === '2xl',
        'w-4.5 h-4.5': size === 'xs',
      }"
    >
      {{ overflowLabel }}{{ hiddenCount }}
    </div>
  </div>
</template>