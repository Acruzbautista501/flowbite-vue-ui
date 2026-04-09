import { computed, ref, watch } from 'vue'
import type {
  BannerProps,
  BannerVariant,
  BannerAction,
  BannerPosition,
} from '@/interfaces/ui/banner/Banner'

interface UseBannerOptions {
  props: BannerProps
}

export function useBanner(options: UseBannerOptions) {
  const localVisible = ref(options.props.visible ?? true)

  watch(
    () => options.props.visible,
    (newValue) => {
      localVisible.value = newValue ?? true
    },
  )

  const openBanner = () => {
    localVisible.value = true
  }

  const closeBanner = () => {
    localVisible.value = false
  }

  const toggleBanner = () => {
    localVisible.value = !localVisible.value
  }

  const containerClasses = computed(() => {
    if (options.props.customContainerClasses) {
      return options.props.customContainerClasses
    }

    const variants: Record<BannerVariant, string> = {
      default:
        'bg-neutral-primary-soft dark:bg-neutral-900 border-default dark:border-neutral-700 text-body dark:text-neutral-200',

      bottom:
        'bg-neutral-primary-soft dark:bg-neutral-900 border-default dark:border-neutral-700 text-body dark:text-neutral-200',

      marketing:
        'bg-neutral-primary-soft dark:bg-neutral-900 border-default dark:border-neutral-700 text-body dark:text-neutral-200 shadow-xs rounded-base',

      newsletter:
        'bg-neutral-primary-soft dark:bg-neutral-900 border-default dark:border-neutral-700 text-body dark:text-neutral-200',

      informational:
        'bg-neutral-secondary-soft dark:bg-neutral-800 border-default dark:border-neutral-700 text-body dark:text-neutral-200',

      success:
        'bg-success-soft dark:bg-emerald-950 border-success-medium dark:border-emerald-800 text-success-strong dark:text-emerald-200',

      warning:
        'bg-warning-soft dark:bg-amber-950 border-warning-medium dark:border-amber-800 text-warning-strong dark:text-amber-200',

      danger:
        'bg-danger-soft dark:bg-red-950 border-danger-medium dark:border-red-800 text-danger-strong dark:text-red-200',
    }

    return variants[options.props.variant ?? 'default']
  })

  const contentClasses = computed(() => {
    if (options.props.customContentClasses) {
      return options.props.customContentClasses
    }

    return 'text-sm font-normal'
  })

  const positionClasses = computed(() => {
    const position = options.props.position ?? 'top'
    const sticky = options.props.sticky ?? true

    if (!sticky) return 'relative'

    const map: Record<BannerPosition, string> = {
      top: 'fixed top-0 start-0 w-full z-50',
      bottom: 'fixed bottom-0 start-0 w-full z-50',
      floating: 'fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] lg:max-w-7xl',
    }

    return map[position]
  })

  const actionClasses = (action?: BannerAction) => {
    if (options.props.customActionClasses) {
      return options.props.customActionClasses
    }

    const variant = action?.variant ?? 'primary'

    const variants: Record<NonNullable<BannerAction['variant']>, string> = {
      primary:
        'text-white bg-brand hover:bg-brand-strong border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-4 py-2.5 transition-colors duration-200',
      secondary:
        'text-heading dark:text-white bg-neutral-primary dark:bg-neutral-800 border border-default dark:border-neutral-700 hover:bg-neutral-secondary-medium dark:hover:bg-neutral-700 focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium rounded-base text-sm px-4 py-2.5 transition-colors duration-200',
      ghost:
        'text-fg-brand hover:underline text-sm font-medium transition-colors duration-200',
    }

    return variants[variant]
  }

  return {
    localVisible,
    openBanner,
    closeBanner,
    toggleBanner,
    containerClasses,
    contentClasses,
    positionClasses,
    actionClasses,
  }
}