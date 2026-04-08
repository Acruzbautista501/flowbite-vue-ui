export interface AccordionItem {
  id: string
  title: string
  content?: string
  html?: string
  open?: boolean
  disabled?: boolean
  icon?: 'chevron' | 'question' | 'none' | 'custom'
}

export type AccordionVariant =
  | 'default'
  | 'card'
  | 'flush'
  | 'color'

export type AccordionMode = 'collapse' | 'open'

export interface AccordionProps {
  items: AccordionItem[]
  variant?: AccordionVariant
  mode?: AccordionMode
  bordered?: boolean
  arrow?: boolean
  rotateIcon?: boolean
  customActiveClasses?: string
  customInactiveClasses?: string
}

export interface AccordionEmits {
  (e: 'update:items', value: AccordionItem[]): void
  (e: 'open', item: AccordionItem): void
  (e: 'close', item: AccordionItem): void
  (e: 'toggle', item: AccordionItem): void
}