import { styleFn } from 'styled-system'

const createShapeStyles = (): styleFn =>
  ({ size = 24 }) => ({
    border: 'none',
    width: size,
    height: size,
  })

export { createShapeStyles }
