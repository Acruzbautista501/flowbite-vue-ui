export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type AvatarRounded = 'full' | 'base' | 'sm' | 'md' | 'lg' | 'none'

export type AvatarStatus =
  | 'online'
  | 'offline'
  | 'busy'
  | 'away'
  | 'none'

export type AvatarStatusPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'

export type AvatarPlaceholder = 'image' | 'icon' | 'initials'

export interface AvatarDropdownItem {
  label: string
  href?: string
  danger?: boolean
}

export interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  name?: string
  subtitle?: string

  size?: AvatarSize
  rounded?: AvatarRounded

  bordered?: boolean
  ringColor?: string

  placeholder?: AvatarPlaceholder

  status?: AvatarStatus
  statusPosition?: AvatarStatusPosition

  tooltip?: string
  clickable?: boolean

  text?: boolean

  dropdown?: boolean
  email?: string
  dropdownItems?: AvatarDropdownItem[]
}

export interface AvatarGroupItem {
  src?: string
  alt?: string
  initials?: string
  tooltip?: string
}

export interface AvatarGroupProps {
  items: AvatarGroupItem[]
  max?: number
  size?: AvatarSize
  bordered?: boolean
  rounded?: AvatarRounded
  overflowLabel?: string
}