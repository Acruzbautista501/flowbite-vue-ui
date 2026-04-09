export type BadgeVariant =
  | 'default'
  | 'alternative'
  | 'gray'
  | 'danger'
  | 'success'
  | 'warning'

export type BadgeSize = 'sm' | 'md' | 'lg'

export type BadgeRounded = 'default' | 'pill' | 'full'

export interface BadgeProps {
  label?: string
  variant?: BadgeVariant
  size?: BadgeSize
  rounded?: BadgeRounded
  border?: boolean
  href?: string
  iconOnly?: boolean
  dot?: boolean
  dismissible?: boolean
  avatar?: string
  disabled?: boolean
}

export interface BadgeEmits {
  (e: 'dismiss'): void
}