import { createBaseStyles }       from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createContentStyles }    from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'

import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { ifProp }                 from 'styled-tools'
import { styleFn }                from 'styled-system'

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

const appearancePrimaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.active.font'),
  backgroundColor: prop('theme.colors.button.primary.active.background'),
  borderColor: prop('theme.colors.button.primary.active.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.disabled.font'),
  backgroundColor: prop('theme.colors.button.primary.disabled.background'),
  borderColor: prop('theme.colors.button.primary.disabled.border'),
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

const appearanceSecondaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.active.font'),
  backgroundColor: prop('theme.colors.button.secondary.active.background'),
  borderColor: prop('theme.colors.button.secondary.active.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondary.disabled.background'),
  borderColor: prop('theme.colors.button.secondary.disabled.border'),
})

const appearanceTertiaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.default.font'),
  backgroundColor: prop('theme.colors.button.tertiary.default.background'),
  borderColor: prop('theme.colors.button.tertiary.default.border'),
})

const appearanceTertiaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.hover.font'),
  backgroundColor: prop('theme.colors.button.tertiary.hover.background'),
  borderColor: prop('theme.colors.button.tertiary.hover.border'),
})

const appearanceTertiaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.active.font'),
  backgroundColor: prop('theme.colors.button.tertiary.active.background'),
  borderColor: prop('theme.colors.button.tertiary.active.border'),
})

const appearanceTertiaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.disabled.font'),
  backgroundColor: prop('theme.colors.button.tertiary.disabled.background'),
  borderColor: prop('theme.colors.button.tertiary.disabled.border'),
})

const appearanceQuaternaryStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.default.font'),
  backgroundColor: prop('theme.colors.button.quaternary.default.background'),
  borderColor: prop('theme.colors.button.quaternary.default.border'),
})

const appearanceQuaternaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.hover.font'),
  backgroundColor: prop('theme.colors.button.quaternary.hover.background'),
  borderColor: prop('theme.colors.button.quaternary.hover.border'),
})

const appearanceQuaternaryActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.active.font'),
  backgroundColor: prop('theme.colors.button.quaternary.active.background'),
  borderColor: prop('theme.colors.button.quaternary.active.border'),
})

const appearanceQuaternaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.disabled.font'),
  backgroundColor: prop('theme.colors.button.quaternary.disabled.background'),
  borderColor: prop('theme.colors.button.quaternary.disabled.border'),
})

const appearanceGhostStyles = createAppearanceStyles({
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  fontColor: 'transparent',
})

const appearanceDangerDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.danger.default.font'),
  backgroundColor: prop('theme.colors.button.danger.default.background'),
  borderColor: prop('theme.colors.button.danger.default.border'),
})

const appearanceDangerHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.danger.hover.font'),
  backgroundColor: prop('theme.colors.button.danger.hover.background'),
  borderColor: prop('theme.colors.button.danger.hover.border'),
})

const appearanceDangerActiveStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.danger.active.font'),
  backgroundColor: prop('theme.colors.button.danger.active.background'),
  borderColor: prop('theme.colors.button.danger.active.border'),
})

const appearanceDangerDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.danger.disabled.font'),
  backgroundColor: prop('theme.colors.button.danger.disabled.background'),
  borderColor: prop('theme.colors.button.danger.disabled.border'),
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  ghost: shapeGhostStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('active', false),
      appearancePrimaryActiveStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryStyles)
    )
  ),
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('active', false),
      appearanceSecondaryActiveStyles,
      ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryStyles)
    )
  ),
  tertiary: ifProp(
    prop('disabled', false),
    appearanceTertiaryDisabledStyles,
    ifProp(
      prop('active', false),
      appearanceTertiaryActiveStyles,
      ifProp(prop('hover', false), appearanceTertiaryHoverStyles, appearanceTertiaryStyles)
    )
  ),
  quaternary: ifProp(
    prop('disabled', false),
    appearanceQuaternaryDisabledStyles,
    ifProp(
      prop('active', false),
      appearanceQuaternaryActiveStyles,
      ifProp(prop('hover', false), appearanceQuaternaryHoverStyles, appearanceQuaternaryStyles)
    )
  ),
  danger: ifProp(
    prop('disabled', false),
    appearanceDangerDisabledStyles,
    ifProp(
      prop('active', false),
      appearanceDangerActiveStyles,
      ifProp(prop('hover', false), appearanceDangerHoverStyles, appearanceDangerDefaultStyles)
    )
  ),
  ghost: appearanceGhostStyles,
})
