import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type BottomNavigationVariant =
  | 'default'
  | 'bordered'
  | 'app-bar'
  | 'button-group'
  | 'card'
  | 'controls'
  | 'media'

export type BottomNavigationPosition = 'fixed' | 'sticky' | 'relative'

export type BottomNavigationActionType = 'button' | 'link' | 'route'

export interface BottomNavigationBadge {
  value: string | number
  variant?: 'primary' | 'danger' | 'success' | 'warning' | 'neutral'
}

export interface BottomNavigationItem {
  id: string | number
  label: string
  icon?: IconDefinition
  active?: boolean
  disabled?: boolean
  srOnly?: boolean

  type?: BottomNavigationActionType
  href?: string
  to?: string

  badge?: BottomNavigationBadge
  onClick?: () => void
}

export interface BottomNavigationCenterAction {
  label: string
  icon?: IconDefinition
  onClick?: () => void
  srOnly?: boolean
  disabled?: boolean
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[]
  variant?: BottomNavigationVariant
  position?: BottomNavigationPosition
  modelValue?: string | number | null

  fixedBreakpoint?: 'always' | 'sm' | 'md' | 'lg' | 'xl'
  showLabels?: boolean
  showTopBorder?: boolean
  fullWidth?: boolean
  elevated?: boolean
  rounded?: boolean

  centerAction?: BottomNavigationCenterAction | null
}

export interface BottomNavigationEmits {
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', item: BottomNavigationItem): void
  (e: 'click', item: BottomNavigationItem): void
}