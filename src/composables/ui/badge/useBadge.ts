import { computed } from 'vue'
import type { BadgeProps } from '../../../interfaces/ui/badge/Badge'

export function useBadge(props: BadgeProps) {
  const variantClasses = computed(() => {
    const variants = {
      default: props.border
        ? 'bg-brand-softer text-fg-brand-strong border border-brand-subtle'
        : 'bg-brand-softer text-fg-brand-strong',

      alternative: props.border
        ? 'bg-neutral-primary-soft text-heading border border-default'
        : 'bg-neutral-primary-soft text-heading',

      gray: props.border
        ? 'bg-neutral-secondary-medium text-heading border border-default-medium'
        : 'bg-neutral-secondary-medium text-heading',

      danger: props.border
        ? 'bg-danger-soft text-fg-danger-strong border border-danger-subtle'
        : 'bg-danger-soft text-fg-danger-strong',

      success: props.border
        ? 'bg-success-soft text-fg-success-strong border border-success-subtle'
        : 'bg-success-soft text-fg-success-strong',

      warning: props.border
        ? 'bg-warning-soft text-fg-warning border border-warning-subtle'
        : 'bg-warning-soft text-fg-warning',
    }

    return variants[props.variant || 'default']
  })

  const sizeClasses = computed(() => {
    const sizes = {
      sm: props.iconOnly
        ? 'h-5 w-5 text-xs'
        : 'text-xs px-1.5 py-0.5',

      md: props.iconOnly
        ? 'h-6 w-6 text-xs'
        : 'text-sm px-2 py-1',

      lg: props.iconOnly
        ? 'h-8 w-8 text-sm'
        : 'text-sm px-3 py-1.5',
    }

    return sizes[props.size || 'sm']
  })

  const roundedClasses = computed(() => {
    const rounded = {
      default: 'rounded',
      pill: 'rounded-full',
      full: 'rounded-full',
    }

    return rounded[props.rounded || 'default']
  })

  const interactiveClasses = computed(() => {
    if (!props.href) return ''

    const hoverMap = {
      default: 'hover:bg-brand-soft',
      alternative: 'hover:bg-neutral-secondary-medium',
      gray: 'hover:bg-neutral-tertiary-medium',
      danger: 'hover:bg-danger-medium',
      success: 'hover:bg-success-medium',
      warning: 'hover:bg-warning-medium',
    }

    return hoverMap[props.variant || 'default']
  })

  const baseClasses = computed(() => {
    return [
      'inline-flex items-center justify-center gap-1 font-medium transition-colors',
      'focus:outline-none',
      props.href ? interactiveClasses.value : '',
      props.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
      props.iconOnly ? 'p-0' : '',
      variantClasses.value,
      sizeClasses.value,
      roundedClasses.value,
    ]
      .filter(Boolean)
      .join(' ')
  })

  const dotClasses = computed(() => {
    const dots = {
      default: 'bg-fg-brand-strong',
      alternative: 'bg-heading',
      gray: 'bg-heading',
      danger: 'bg-fg-danger-strong',
      success: 'bg-fg-success-strong',
      warning: 'bg-fg-warning',
    }

    return dots[props.variant || 'default']
  })

  return {
    baseClasses,
    dotClasses,
  }
}