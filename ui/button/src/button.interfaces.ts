import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tertiary' | 'quaternary' | 'danger'

export type ButtonSize = 'small' | 'normal' | 'ghost'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
}
