import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputSize = 'normal'

export interface InputProps extends BaseInputProps {
  size?: InputSize
  label?: string
}
