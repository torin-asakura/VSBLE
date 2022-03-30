import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { ifProp }                 from 'styled-tools'

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 44,
  fontSize: prop('theme.fontSizes.semiRegular'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: 16,
  paddingRight: 16,
})

export const baseStyles = createBaseStyles()

export const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.default.font'),
  backgroundColor: prop('theme.colors.input.primary.default.background'),
  borderColor: prop('theme.colors.input.primary.default.border'),
})

export const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.hover.font'),
  backgroundColor: prop('theme.colors.input.primary.hover.background'),
  borderColor: prop('theme.colors.input.primary.hover.border'),
})

export const appearancePrimaryFocusStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.focus.font'),
  backgroundColor: prop('theme.colors.input.primary.focus.background'),
  borderColor: prop('theme.colors.input.primary.focus.border'),
})

export const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.primary.disabled.font'),
  backgroundColor: prop('theme.colors.input.primary.disabled.background'),
  borderColor: prop('theme.colors.input.primary.disabled.border'),
})

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeStyles,
})
export const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('focus', false),
      appearancePrimaryFocusStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
    )
  ),
})
