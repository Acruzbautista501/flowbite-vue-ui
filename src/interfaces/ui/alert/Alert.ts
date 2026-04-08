export type AlertVariant = 'info' | 'danger' | 'success' | 'warning' | 'dark'

export type AlertRounded = 'none' | 'sm' | 'md' | 'lg' | 'full'

export interface AlertProps {
  modelValue?: boolean
  variant?: AlertVariant
  title?: string
  description?: string
  dismissible?: boolean
  icon?: boolean
  border?: boolean
  borderAccent?: boolean
  inline?: boolean
  rounded?: AlertRounded
}

export interface AlertEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}