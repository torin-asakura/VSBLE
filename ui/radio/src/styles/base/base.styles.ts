import {}          from '..'

import { styleFn } from 'styled-system'

const createBaseStyles = (): styleFn => () => ({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'absolute',
  '& > input': {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
  },
  '& > input:checked ~ div, div:after': {
    display: 'flex',
  },
})

export { createBaseStyles }
