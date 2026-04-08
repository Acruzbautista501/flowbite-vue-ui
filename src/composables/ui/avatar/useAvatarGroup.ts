import { computed } from 'vue'
import type { AvatarGroupProps } from '@/interfaces/ui/avatar/Avatar'

export function useAvatarGroup(props: AvatarGroupProps) {
  const visibleItems = computed(() => {
    return props.items.slice(0, props.max || props.items.length)
  })

  const hiddenCount = computed(() => {
    const max = props.max || props.items.length
    return props.items.length > max ? props.items.length - max : 0
  })

  return {
    visibleItems,
    hiddenCount,
  }
}