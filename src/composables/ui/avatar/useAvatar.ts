import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import type { AvatarProps } from '@/interfaces/ui/avatar/Avatar'

export function useAvatar(props: AvatarProps) {
  const isDropdownOpen = ref(false)
  const rootRef = ref<HTMLElement | null>(null)
  const hasImageError = ref(false)

  const sizeClasses = computed(() => {
    const sizes = {
      xs: 'w-[18px] h-[18px] text-[9px]',
      sm: 'w-6 h-6 text-xs',
      md: 'w-8 h-8 text-sm',
      lg: 'w-10 h-10 text-sm',
      xl: 'w-14 h-14 text-base',
      '2xl': 'w-16 h-16 text-lg',
    }

    return sizes[props.size || 'lg']
  })

  const statusSizeClasses = computed(() => {
    const sizes = {
      xs: 'w-2 h-2',
      sm: 'w-2.5 h-2.5',
      md: 'w-3 h-3',
      lg: 'w-3.5 h-3.5',
      xl: 'w-4 h-4',
      '2xl': 'w-4.5 h-4.5',
    }

    return sizes[props.size || 'lg']
  })

  const roundedClasses = computed(() => {
    const rounded = {
      full: 'rounded-full',
      base: 'rounded-base',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      none: 'rounded-none',
    }

    return rounded[props.rounded || 'full']
  })

  const ringClasses = computed(() => {
    if (!props.bordered) return ''
    return `p-[2px] ring-2 ${props.ringColor || 'ring-default'}`
  })

  const wrapperClasses = computed(() => [
    'relative inline-flex shrink-0 items-center justify-center overflow-visible select-none',
    sizeClasses.value,
  ])

  const avatarBoxClasses = computed(() => [
    'relative inline-flex items-center justify-center overflow-hidden shrink-0',
    sizeClasses.value,
    roundedClasses.value,
    ringClasses.value,
  ])

  const avatarBoxClassesIndicator = computed(() => [
    'relative inline-block',
    sizeClasses.value,
    roundedClasses.value,
    ringClasses.value,
  ])

  const imageClasses = computed(() => [
    'object-cover w-full h-full',
    roundedClasses.value,
  ])

    const imageClassesIndicator = computed(() => [
    'w-10 h-10 rounded-full object-cover',
    roundedClasses.value,
  ])

  const placeholderClasses = computed(() => [
    'relative flex items-center justify-center w-full h-full overflow-hidden',
    'bg-neutral-tertiary dark:bg-neutral-secondary-medium',
    'text-body dark:text-body',
    roundedClasses.value,
  ])

  const iconClasses = computed(() => {
    const sizes = {
      xs: 'w-4 h-4',
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-7 h-7',
      xl: 'w-10 h-10',
      '2xl': 'w-11 h-11',
    }

    return `${sizes[props.size || 'lg']} text-body-subtle dark:text-gray-400`
  })

  const showImage = computed(() => !!props.src && !hasImageError.value)
  const showInitials = computed(
    () => (!props.src || hasImageError.value) && props.placeholder === 'initials' && !!props.initials
  )
  const showIcon = computed(
    () => (!props.src || hasImageError.value) && props.placeholder === 'icon'
  )

  const statusColorClasses = computed(() => {
    const status = {
      online: 'bg-success',
      offline: 'bg-neutral-secondary',
      busy: 'bg-danger',
      away: 'bg-warning',
      none: 'hidden',
    }

    return status[props.status || 'none']
  })

  const statusPositionClasses = computed(() => {
    const positions = {
      'top-right': '-top-0.5 -right-0.5',
      'top-left': '-top-0.5 -left-0.5',
      'bottom-right': '-bottom-0.5 -right-0.5',
      'bottom-left': '-bottom-0.5 -left-0.5',
    }

    return positions[props.statusPosition || 'bottom-right']
  })

  const statusClasses = computed(() => [
    'absolute bottom-0 right-0 block w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 bg-green-500 translate-x-1/4 translate-y-1/4',
    statusSizeClasses.value,
    statusColorClasses.value,
    statusPositionClasses.value,
  ])

  const textContainerClasses = computed(() => [
    'font-medium text-heading dark:text-white',
  ])

  const subtitleClasses = computed(() => [
    'text-sm font-normal text-body dark:text-gray-400',
  ])

  const tooltipClasses = computed(() => [
    'absolute left-1/2 -translate-x-1/2 -top-12 z-30 whitespace-nowrap',
    'px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-base shadow-lg',
    'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200',
    'pointer-events-none',
  ])

  const dropdownMenuClasses = computed(() => [
    'absolute top-full left-0 mt-2 z-40 w-56',
    'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700',
    'rounded-base shadow-lg overflow-hidden',
  ])

  const toggleDropdown = () => {
    if (!props.dropdown) return
    isDropdownOpen.value = !isDropdownOpen.value
  }

  const closeDropdown = () => {
    isDropdownOpen.value = false
  }

  const onImageError = () => {
    hasImageError.value = true
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!rootRef.value) return
    if (!rootRef.value.contains(event.target as Node)) {
      closeDropdown()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  return {
    rootRef,
    isDropdownOpen,
    wrapperClasses,
    avatarBoxClasses,
    imageClasses,
    placeholderClasses,
    iconClasses,
    showImage,
    showInitials,
    showIcon,
    statusClasses,
    textContainerClasses,
    subtitleClasses,
    tooltipClasses,
    dropdownMenuClasses,
    avatarBoxClassesIndicator,
    imageClassesIndicator,
    toggleDropdown,
    closeDropdown,
    onImageError,
  }
}