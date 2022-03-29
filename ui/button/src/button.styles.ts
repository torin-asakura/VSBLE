import { createBaseStyles }       from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createContentStyles }    from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'

import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { ifProp }                 from 'styled-tools'

const smallNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 32,
  fontSize: prop('theme.fontSizes.small'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 12,
  paddingRight: 12,
})

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 44,
  fontSize: prop('theme.fontSizes.semiRegular'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 20,
  paddingRight: 20,
})

const shapeGhostStyles = createShapeStyles({
  size: 'auto' as any,
  paddingLeft: 0,
  paddingRight: 0,
})

const appearancePrimaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearanceSecondaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceGhostStyles = createAppearanceStyles({
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  fontColor: 'transparent',
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  ghost: shapeGhostStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryStyles),
  secondary: ifProp(
    prop('hover', false),
    appearanceSecondaryHoverStyles,
    appearanceSecondaryStyles
  ),
  ghost: appearanceGhostStyles,
})
