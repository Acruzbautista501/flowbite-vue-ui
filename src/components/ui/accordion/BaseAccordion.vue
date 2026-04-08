<script setup lang="ts">
import { computed, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronDown,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons'
import { useAccordion } from '@/composables/ui/accordion/useAccordion'
import type {
  AccordionProps,
  AccordionEmits,
  AccordionItem,
} from '@/interfaces/ui/accordion/Accordion'

const props = withDefaults(defineProps<AccordionProps>(), {
  variant: 'default',
  mode: 'collapse',
  bordered: true,
  arrow: true,
  rotateIcon: true,
})

const emit = defineEmits<AccordionEmits>()

const {
  localItems,
  toggleItem,
  activeClasses,
  inactiveClasses,
} = useAccordion({
  items: props.items,
  mode: props.mode,
  variant: props.variant,
  customActiveClasses: props.customActiveClasses,
  customInactiveClasses: props.customInactiveClasses,
})

watch(
  localItems,
  (newItems, oldItems) => {
    emit('update:items', newItems)

    newItems.forEach((item, index) => {
      const oldItem = oldItems?.[index]
      if (!oldItem) return

      if (item.open !== oldItem.open) {
        emit('toggle', item)
        if (item.open) emit('open', item)
        else emit('close', item)
      }
    })
  },
  { deep: true },
)

const wrapperClasses = computed(() => {
  const base = []

  if (props.variant === 'default' || props.variant === 'color') {
    base.push(
      'rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm'
    )
  }

  if (props.variant === 'flush') {
    base.push('w-full')
  }

  if (props.variant === 'card') {
    base.push('w-full')
  }

  return base.join(' ')
})

const getHeaderClasses = (item: AccordionItem, index: number) => {
  const isOpen = item.open

  const base =
    'flex items-center justify-between w-full font-medium rtl:text-right gap-3 transition-colors duration-200'

  const stateClasses = isOpen ? activeClasses.value : inactiveClasses.value

  const variants: Record<string, string> = {
    default: [
      'p-5 hover:text-slate-900 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800',
      index === 0 ? 'rounded-t-2xl' : '',
      index !== props.items.length - 1
        ? 'border-b border-slate-200 dark:border-slate-700'
        : '',
    ].join(' '),

    color: [
      'p-5 hover:text-blue-700 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-800',
      index === 0 ? 'rounded-t-2xl' : '',
      index !== props.items.length - 1
        ? 'border-b border-slate-200 dark:border-slate-700'
        : '',
    ].join(' '),

    flush: 'py-5 border-b border-slate-200 dark:border-slate-700',

    card: [
      'p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800',
      isOpen ? 'rounded-b-none' : '',
    ].join(' '),
  }

  return `${base} ${variants[props.variant]} ${stateClasses}`
}

const getBodyWrapperClasses = (index: number) => {
  const variants: Record<string, string> = {
    default:
      index !== props.items.length - 1
        ? 'border-b border-slate-200 dark:border-slate-700'
        : '',
    color:
      index !== props.items.length - 1
        ? 'border-b border-slate-200 dark:border-slate-700'
        : '',
    flush: '',
    card: 'border border-t-0 border-slate-200 dark:border-slate-700 rounded-b-2xl shadow-sm',
  }

  return variants[props.variant]
}

const getBodyContentClasses = (index: number) => {
  const variants: Record<string, string> = {
    default:
      index === props.items.length - 1
        ? 'p-4 md:p-5 border-t border-slate-200 dark:border-slate-700'
        : 'p-4 md:p-5',
    color:
      index === props.items.length - 1
        ? 'p-4 md:p-5 border-t border-slate-200 dark:border-slate-700'
        : 'p-4 md:p-5',
    flush:
      index === props.items.length - 1
        ? 'py-5 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700'
        : 'py-5 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300',
    card: 'p-4 md:p-5',
  }

  return variants[props.variant]
}

const getContainerSpacing = (index: number) => {
  if (props.variant === 'card' && index > 0) return 'mt-4'
  return ''
}
</script>

<template>
  <div :class="wrapperClasses">
    <div
      v-for="(item, index) in localItems"
      :key="item.id"
      :class="getContainerSpacing(index)"
    >
      <h2 :id="`${item.id}-heading`">
        <button
          type="button"
          :class="getHeaderClasses(item, index)"
          :aria-expanded="item.open"
          :aria-controls="`${item.id}-body`"
          :disabled="item.disabled"
          @click="toggleItem(item.id)"
        >
          <span class="flex items-center gap-2">
            <template v-if="item.icon === 'question'">
              <FontAwesomeIcon
                :icon="faCircleQuestion"
                class="w-5 h-5 shrink-0"
              />
            </template>

            <slot :name="`title-${item.id}`" :item="item">
              {{ item.title }}
            </slot>
          </span>

          <slot name="icon" :item="item" :open="item.open">
            <FontAwesomeIcon
              v-if="props.arrow && item.icon !== 'none'"
              :icon="faChevronDown"
              class="w-5 h-5 shrink-0 transition-transform duration-200"
              :class="{
                'rotate-180': props.rotateIcon && item.open,
              }"
            />
          </slot>
        </button>
      </h2>

      <Transition
        enter-active-class="transition-all duration-300 ease-in-out"
        leave-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[1000px] opacity-100"
        leave-from-class="max-h-[1000px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-show="item.open"
          :id="`${item.id}-body`"
          :class="getBodyWrapperClasses(index)"
          :aria-labelledby="`${item.id}-heading`"
          class="overflow-hidden"
        >
          <div :class="getBodyContentClasses(index)">
            <slot :name="`content-${item.id}`" :item="item">
              <div
                v-if="item.html"
                class="prose prose-sm max-w-none text-slate-700 dark:prose-invert dark:text-slate-300"
                v-html="item.html"
              />
              <p v-else class="text-slate-700 dark:text-slate-300">
                {{ item.content }}
              </p>
            </slot>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>