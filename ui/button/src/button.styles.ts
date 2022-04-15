import { createBaseStyles }    from '@atls-ui-parts/button'
import { createShapeStyles }   from '@atls-ui-parts/button'
import { createContentStyles } from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

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

const shapeVerySmallStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 28,
  fontSize: prop('theme.fontSizes.semiRegular'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 8,
  paddingRight: 8,
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  ghost: shapeGhostStyles,
  verySmall: shapeVerySmallStyles,
})
