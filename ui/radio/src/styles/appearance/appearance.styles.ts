import { styleFn } from 'styled-system'

const createAppearanceStyles = (): styleFn =>
  ({ theme }: any) => ({
    backgroundColor: theme.colors.background.beige,
    borderColor: theme.colors.text.purple,
    borderRadius: theme.radii.full,
  })

export { createAppearanceStyles }
