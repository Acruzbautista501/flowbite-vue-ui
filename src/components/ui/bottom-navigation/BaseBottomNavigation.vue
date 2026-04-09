<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useBottomNavigation } from '@/composables/ui/bottom-navigation/useBottomNavigation'
import type {
  BottomNavigationEmits,
  BottomNavigationItem,
  BottomNavigationProps,
} from '@/interfaces/ui/bottom-navigation/BottomNavigation'

const props = withDefaults(defineProps<BottomNavigationProps>(), {
  variant: 'default',
  position: 'fixed',
  modelValue: null,
  fixedBreakpoint: 'always',
  showLabels: true,
  showTopBorder: true,
  fullWidth: true,
  elevated: true,
  rounded: false,
  centerAction: null,
})

const emit = defineEmits<BottomNavigationEmits>()

const { normalizedItems, setActive, getItemTag, getItemProps } =
  useBottomNavigation(props)

function handleItemClick(item: BottomNavigationItem) {
  if (item.disabled) return

  setActive(item)
  emit('update:modelValue', item.id)
  emit('change', item)
  emit('click', item)

  item.onClick?.()
}

function handleCenterAction() {
  if (!props.centerAction || props.centerAction.disabled) return
  props.centerAction.onClick?.()
}

const positionClasses = computed(() => {
  const base = {
    fixed: 'fixed bottom-0 left-0 z-50',
    sticky: 'sticky bottom-0 left-0 z-40',
    relative: 'relative',
  }

  return base[props.position]
})

const breakpointClasses = computed(() => {
  if (props.position !== 'fixed') return ''

  const map = {
    always: '',
    sm: 'sm:bottom-0',
    md: 'md:bottom-0',
    lg: 'lg:bottom-0',
    xl: 'xl:bottom-0',
  }

  return map[props.fixedBreakpoint]
})

const containerClasses = computed(() => {
  const base = [
    'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900',
    props.showTopBorder ? 'border-t' : '',
    props.fullWidth ? 'w-full' : 'mx-auto max-w-3xl',
    props.elevated
      ? 'shadow-[0_-4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.35)]'
      : '',
    props.rounded && props.position !== 'fixed'
      ? 'rounded-2xl border'
      : '',
  ]

  if (props.variant === 'card') {
    base.push('rounded-2xl border')
  }

  return base.join(' ')
})

const wrapperClasses = computed(() => {
  if (props.variant === 'button-group') {
    return 'grid h-16 max-w-lg grid-cols-5 mx-auto'
  }

  if (props.variant === 'app-bar') {
    return 'grid h-16 max-w-lg grid-cols-5 mx-auto'
  }

  return 'grid h-16 max-w-lg grid-cols-4 mx-auto'
})

const itemBaseClasses = computed(() =>
  [
    'group inline-flex flex-col items-center justify-center px-5 transition-all duration-200',
    'hover:bg-gray-50 dark:hover:bg-gray-800',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900',
  ].join(' ')
)

function getItemClasses(item: BottomNavigationItem, index: number) {
  const classes = [itemBaseClasses.value]

  if (props.variant === 'bordered') {
    classes.push('border-gray-200 dark:border-gray-700')
    if (index !== normalizedItems.value.length - 1) {
      classes.push('border-r')
    }
  }

  if (item.active) {
    classes.push('text-indigo-600 dark:text-indigo-400')
  } else {
    classes.push('text-gray-500 dark:text-gray-400')
  }

  if (item.disabled) {
    classes.push('cursor-not-allowed opacity-50')
  } else {
    classes.push('cursor-pointer')
  }

  return classes.join(' ')
}

function getIconClasses(item: BottomNavigationItem) {
  return item.active
    ? 'mb-1 h-5 w-5 text-indigo-600 dark:text-indigo-400'
    : 'mb-1 h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'
}

function getLabelClasses(item: BottomNavigationItem) {
  return item.active
    ? 'text-xs font-medium text-indigo-600 dark:text-indigo-400'
    : 'text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'
}

function getBadgeClasses(variant?: string) {
  const map: Record<string, string> = {
    primary:
      'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300',
    danger:
      'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',
    success:
      'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300',
    warning:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300',
    neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
  }

  return map[variant || 'primary']
}

/**
 * Normaliza el icono para soportar FontAwesome
 */
function getItemIcon(icon?: IconDefinition) {
  return icon || null
}

function getCenterActionIcon(icon?: IconDefinition) {
  return icon || faPlus
}
</script>

<template>
  <div :class="[positionClasses, breakpointClasses]" class="right-0">
    <div :class="containerClasses">
      <div :class="wrapperClasses">
        <template v-for="(item, index) in normalizedItems" :key="item.id">
          <component
            :is="getItemTag(item) === 'RouterLink' ? RouterLink : getItemTag(item)"
            v-bind="getItemProps(item)"
            :class="getItemClasses(item, index)"
            @click="handleItemClick(item)"
          >
            <div class="relative flex flex-col items-center justify-center">
              <FontAwesomeIcon
                v-if="getItemIcon(item.icon)"
                :icon="getItemIcon(item.icon)!"
                :class="getIconClasses(item)"
              />

              <span
                v-if="item.badge"
                :class="[
                  'absolute -right-3 -top-1 inline-flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold',
                  getBadgeClasses(item.badge.variant),
                ]"
              >
                {{ item.badge.value }}
              </span>

              <span v-if="props.showLabels" :class="getLabelClasses(item)">
                {{ item.label }}
              </span>

              <span v-if="item.srOnly" class="sr-only">{{ item.label }}</span>
            </div>
          </component>

          <template
            v-if="props.variant === 'app-bar' && index === 1 && props.centerAction"
          >
            <div class="inline-flex items-center justify-center">
              <button
                type="button"
                class="group inline-flex h-14 w-14 -translate-y-4 items-center justify-center rounded-full border border-white bg-indigo-600 font-medium shadow-lg transition-all duration-200 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-900 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                :disabled="props.centerAction.disabled"
                @click="handleCenterAction"
              >
                <FontAwesomeIcon
                  :icon="getCenterActionIcon(props.centerAction.icon)"
                  class="h-6 w-6 text-white"
                />
                <span class="sr-only">
                  {{ props.centerAction.label }}
                </span>
              </button>
            </div>
          </template>
        </template>
      </div>

      <slot name="extra" />
    </div>
  </div>
</template>