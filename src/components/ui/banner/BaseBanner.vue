<script setup lang="ts">
import { computed, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faBullhorn,
  faPercent,
  faCircleInfo,
  faEnvelope,
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

import { useBanner } from '@/composables/ui/banner/useBanner'
import type {
  BannerAction,
  BannerEmits,
  BannerIcon,
  BannerProps,
} from '@/interfaces/ui/banner/Banner'

defineOptions({
  components: {
    FontAwesomeIcon,
  },
})

const props = withDefaults(defineProps<BannerProps>(), {
  id: 'base-banner',
  variant: 'default',
  position: 'top',
  icon: 'megaphone',
  visible: true,
  dismissible: true,
  centered: false,
  bordered: true,
  sticky: true,
  showIcon: true,
})

const emit = defineEmits<BannerEmits>()

const {
  localVisible,
  closeBanner,
  openBanner,
  containerClasses,
  contentClasses,
  positionClasses,
  actionClasses,
} = useBanner({
  props,
})

watch(
  () => props.visible,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue) emit('open')
      else emit('close')
    }
  },
)

watch(localVisible, (value) => {
  emit('update:visible', value)

  if (value) emit('open')
  else emit('close')
})

const handleClose = () => {
  closeBanner()
}

const handleAction = (action: BannerAction) => {
  emit('action', action)
}

const iconComponent = computed<IconDefinition | null>(() => {
  const icons: Record<BannerIcon, IconDefinition | null> = {
    megaphone: faBullhorn,
    discount: faPercent,
    info: faCircleInfo,
    mail: faEnvelope,
    success: faCircleCheck,
    warning: faTriangleExclamation,
    error: faCircleXmark,
    none: null,
    custom: null,
  }

  return icons[props.icon]
})

const wrapperClasses = computed(() => {
  const base = [
    positionClasses.value,
    'transition-all duration-300',
    'flex justify-between',
    props.variant === 'marketing'
      ? 'flex-col md:flex-row'
      : 'flex-col md:flex-row',
    'p-4',
    props.bordered ? 'border' : '',
    containerClasses.value,
  ]

  return base.join(' ')
})

const innerContentClasses = computed(() => {
  return [
    'flex items-start',
    props.centered ? 'mx-auto justify-center text-center' : 'mx-auto',
    props.variant === 'marketing' || props.variant === 'informational'
      ? 'w-full'
      : 'items-center',
    'gap-3',
  ].join(' ')
})

const iconWrapperClasses = computed(() => {
  return [
    'inline-flex items-center justify-center shrink-0 rounded-full',
    props.variant === 'marketing' || props.variant === 'informational'
      ? 'w-10 h-10'
      : 'w-6 h-6',
    'bg-neutral-tertiary dark:bg-neutral-800',
  ].join(' ')
})

const closeButtonClasses = computed(() => {
  return [
    'shrink-0 inline-flex justify-center items-center',
    'w-7 h-7 text-sm rounded-sm transition-colors duration-200',
    'text-body dark:text-neutral-300',
    'hover:bg-neutral-tertiary dark:hover:bg-neutral-800',
    'hover:text-heading dark:hover:text-white',
  ].join(' ')
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-in-out"
    leave-active-class="transition-all duration-300 ease-in-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="localVisible"
      :id="props.id"
      tabindex="-1"
      :class="wrapperClasses"
    >
      <div :class="innerContentClasses">
        <template v-if="props.showIcon && props.icon !== 'none'">
          <slot name="icon">
            <span :class="iconWrapperClasses">
              <FontAwesomeIcon
                v-if="iconComponent"
                :icon="iconComponent"
                class="text-sm"
              />
            </span>
          </slot>
        </template>

        <div class="flex-1">
          <slot name="content">
            <div v-if="props.title" class="mb-1">
              <h2 class="text-base font-semibold text-heading dark:text-white">
                {{ props.title }}
              </h2>
            </div>

            <div :class="contentClasses">
              <div
                v-if="props.html"
                class="prose prose-sm max-w-none dark:prose-invert"
                v-html="props.html"
              />
              <p v-else-if="props.message">
                {{ props.message }}
              </p>
            </div>
          </slot>
        </div>
      </div>

      <div
        class="flex items-center shrink-0 gap-2 mt-4 md:mt-0"
        :class="{
          'w-full md:w-auto': props.variant === 'newsletter',
        }"
      >
        <slot name="actions">
          <template v-if="props.actions?.length">
            <template v-for="(action, index) in props.actions" :key="index">
              <a
                v-if="action.href"
                :href="action.href"
                :target="action.external ? '_blank' : '_self'"
                :rel="action.external ? 'noopener noreferrer' : undefined"
                :class="actionClasses(action)"
                @click="handleAction(action)"
              >
                {{ action.label }}
              </a>

              <button
                v-else
                type="button"
                :class="actionClasses(action)"
                @click="handleAction(action)"
              >
                {{ action.label }}
              </button>
            </template>
          </template>
        </slot>

        <button
          v-if="props.dismissible"
          type="button"
          :class="closeButtonClasses"
          @click="handleClose"
        >
          <FontAwesomeIcon :icon="faXmark" class="text-sm" />
          <span class="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  </Transition>
</template>