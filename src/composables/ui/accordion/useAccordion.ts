import { computed, ref, watch } from 'vue'
import type {
  AccordionItem,
  AccordionMode,
  AccordionVariant,
} from '@/interfaces/ui/accordion/Accordion'

interface UseAccordionOptions {
  items: AccordionItem[]
  mode?: AccordionMode
  variant?: AccordionVariant
  customActiveClasses?: string
  customInactiveClasses?: string
}

export function useAccordion(options: UseAccordionOptions) {
  const localItems = ref<AccordionItem[]>(
    options.items.map((item) => ({
      ...item,
      open: item.open ?? false,
    })),
  )

  watch(
    () => options.items,
    (newItems) => {
      localItems.value = newItems.map((item) => ({
        ...item,
        open: item.open ?? false,
      }))
    },
    { deep: true },
  )

  const isAlwaysOpen = computed(() => options.mode === 'open')

  const toggleItem = (id: string) => {
    localItems.value = localItems.value.map((item) => {
      if (item.disabled) return item

      if (item.id === id) {
        return { ...item, open: !item.open }
      }

      if (!isAlwaysOpen.value) {
        return { ...item, open: false }
      }

      return item
    })
  }

  const openItem = (id: string) => {
    localItems.value = localItems.value.map((item) => {
      if (item.disabled) return item

      if (item.id === id) {
        return { ...item, open: true }
      }

      if (!isAlwaysOpen.value) {
        return { ...item, open: false }
      }

      return item
    })
  }

  const closeItem = (id: string) => {
    localItems.value = localItems.value.map((item) =>
      item.id === id ? { ...item, open: false } : item,
    )
  }

  const activeClasses = computed(() => {
    if (options.customActiveClasses) return options.customActiveClasses

    const variants: Record<AccordionVariant, string> = {
      default: 'text-heading bg-neutral-primary-soft',
      card: 'text-heading bg-neutral-primary-soft rounded-b-none shadow-none',
      flush: 'bg-neutral-primary text-heading',
      color: 'text-fg-brand bg-brand-softer',
    }

    return variants[options.variant ?? 'default']
  })

  const inactiveClasses = computed(() => {
    if (options.customInactiveClasses) return options.customInactiveClasses

    return 'text-body'
  })

  return {
    localItems,
    isAlwaysOpen,
    toggleItem,
    openItem,
    closeItem,
    activeClasses,
    inactiveClasses,
  }
}