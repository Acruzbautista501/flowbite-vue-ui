import { computed, ref, watch } from 'vue'
import type {
  BottomNavigationItem,
  BottomNavigationProps,
} from '@/interfaces/ui/bottom-navigation/BottomNavigation'

export function useBottomNavigation(props: BottomNavigationProps) {
  const localItems = ref<BottomNavigationItem[]>([...props.items])

  const activeId = ref<string | number | null>(props.modelValue ?? null)

  watch(
    () => props.items,
    (newItems) => {
      localItems.value = [...newItems]

      const activeItem = newItems.find((item) => item.active)
      if (props.modelValue == null && activeItem) {
        activeId.value = activeItem.id
      }
    },
    { immediate: true, deep: true },
  )

  watch(
    () => props.modelValue,
    (newValue) => {
      activeId.value = newValue ?? null
    },
    { immediate: true },
  )

  const normalizedItems = computed(() =>
    localItems.value.map((item) => ({
      ...item,
      active: activeId.value === item.id || item.active === true,
      type: item.type ?? 'button',
    })),
  )

  function setActive(item: BottomNavigationItem) {
    if (item.disabled) return
    activeId.value = item.id
  }

  function getItemTag(item: BottomNavigationItem) {
    if (item.type === 'link') return 'a'
    if (item.type === 'route') return 'RouterLink'
    return 'button'
  }

  function getItemProps(item: BottomNavigationItem) {
    if (item.type === 'link') {
      return {
        href: item.href,
        target: '_self',
      }
    }

    if (item.type === 'route') {
      return {
        to: item.to,
      }
    }

    return {
      type: 'button',
    }
  }

  return {
    activeId,
    normalizedItems,
    setActive,
    getItemTag,
    getItemProps,
  }
}