import { computed } from 'vue'
import type { AlertProps } from '@/interfaces/ui/alert/Alert'

export function useAlert(props: AlertProps) {
  const variantClasses = computed(() => {
    const variants = {
      info: {
        base: 'text-blue-800 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300',
        border: 'border border-blue-300 dark:border-blue-700',
        borderAccent: 'border-t-4 border-blue-500',
        close:
          'hover:bg-blue-100 focus:ring-2 focus:ring-blue-400 dark:hover:bg-blue-800/50 dark:focus:ring-blue-700',
        badge:
          'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200',
        button:
          'bg-blue-600 hover:bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800',
      },
      danger: {
        base: 'text-red-800 bg-red-50 dark:bg-red-900/30 dark:text-red-300',
        border: 'border border-red-300 dark:border-red-700',
        borderAccent: 'border-t-4 border-red-500',
        close:
          'hover:bg-red-100 focus:ring-2 focus:ring-red-400 dark:hover:bg-red-800/50 dark:focus:ring-red-700',
        badge:
          'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200',
        button:
          'bg-red-600 hover:bg-red-700 text-white focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800',
      },
      success: {
        base: 'text-green-800 bg-green-50 dark:bg-green-900/30 dark:text-green-300',
        border: 'border border-green-300 dark:border-green-700',
        borderAccent: 'border-t-4 border-green-500',
        close:
          'hover:bg-green-100 focus:ring-2 focus:ring-green-400 dark:hover:bg-green-800/50 dark:focus:ring-green-700',
        badge:
          'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200',
        button:
          'bg-green-600 hover:bg-green-700 text-white focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800',
      },
      warning: {
        base: 'text-yellow-800 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-300',
        border: 'border border-yellow-300 dark:border-yellow-700',
        borderAccent: 'border-t-4 border-yellow-500',
        close:
          'hover:bg-yellow-100 focus:ring-2 focus:ring-yellow-400 dark:hover:bg-yellow-800/50 dark:focus:ring-yellow-700',
        badge:
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200',
        button:
          'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800',
      },
      dark: {
        base: 'text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-200',
        border: 'border border-gray-300 dark:border-gray-700',
        borderAccent: 'border-t-4 border-gray-500',
        close:
          'hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
        badge:
          'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
        button:
          'bg-gray-900 hover:bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600',
      },
    }

    return variants[props.variant ?? 'info']
  })

  const roundedClasses = computed(() => {
    const rounded = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }

    return rounded[props.rounded ?? 'lg']
  })

  const wrapperClasses = computed(() => {
    return [
      'transition-all duration-300',
      props.inline ? 'inline-flex items-center gap-2 px-3 py-1.5 text-sm' : 'w-full p-4 text-sm',
      variantClasses.value.base,
      roundedClasses.value,
      props.border ? variantClasses.value.border : '',
      props.borderAccent ? variantClasses.value.borderAccent : '',
    ].join(' ')
  })

  const contentClasses = computed(() => {
    return props.icon ? 'flex items-start gap-3' : ''
  })

  const closeButtonClasses = computed(() => {
    return [
      'ms-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition',
      'focus:outline-none',
      variantClasses.value.close,
    ].join(' ')
  })

  const badgeClasses = computed(() => {
    return [
      'rounded-full px-2 py-0.5 text-xs font-medium',
      variantClasses.value.badge,
    ].join(' ')
  })

  const actionButtonClasses = computed(() => {
    return [
      'inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium shadow-sm transition focus:outline-none',
      variantClasses.value.button,
    ].join(' ')
  })

  return {
    wrapperClasses,
    contentClasses,
    closeButtonClasses,
    badgeClasses,
    actionButtonClasses,
  }
}