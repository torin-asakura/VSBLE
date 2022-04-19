import { styleFn } from 'styled-system'

export const placeholderStyles = (): styleFn => () => ({
  'input::placeholder': {
    color: 'rgba(235,235,235,1)'
  },
})
