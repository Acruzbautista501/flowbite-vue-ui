export type BannerVariant =
  | 'default'
  | 'bottom'
  | 'marketing'
  | 'newsletter'
  | 'informational'
  | 'success'
  | 'warning'
  | 'danger'

export type BannerPosition = 'top' | 'bottom' | 'floating'

export type BannerIcon =
  | 'megaphone'
  | 'discount'
  | 'info'
  | 'mail'
  | 'success'
  | 'warning'
  | 'error'
  | 'none'
  | 'custom'

export interface BannerAction {
  label: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  external?: boolean
}

export interface BannerProps {
  id?: string
  title?: string
  message?: string
  html?: string
  variant?: BannerVariant
  position?: BannerPosition
  icon?: BannerIcon
  visible?: boolean
  dismissible?: boolean
  centered?: boolean
  bordered?: boolean
  sticky?: boolean
  showIcon?: boolean
  actions?: BannerAction[]
  customContainerClasses?: string
  customContentClasses?: string
  customActionClasses?: string
}

export interface BannerEmits {
  (e: 'update:visible', value: boolean): void
  (e: 'close'): void
  (e: 'open'): void
  (e: 'action', action: BannerAction): void
}