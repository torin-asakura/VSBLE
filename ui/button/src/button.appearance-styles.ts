import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.pressed.font'),
  backgroundColor: prop('theme.colors.button.primary.pressed.background'),
  borderColor: prop('theme.colors.button.primary.pressed.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.disabled.font'),
  backgroundColor: prop('theme.colors.button.primary.disabled.background'),
  borderColor: prop('theme.colors.button.primary.disabled.border'),
})

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.pressed.font'),
  backgroundColor: prop('theme.colors.button.secondary.pressed.background'),
  borderColor: prop('theme.colors.button.secondary.pressed.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondary.disabled.background'),
  borderColor: prop('theme.colors.button.secondary.disabled.border'),
})

const appearanceTertiaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.default.font'),
  backgroundColor: prop('theme.colors.button.tertiary.default.background'),
  borderColor: prop('theme.colors.button.tertiary.default.border'),
})

const appearanceTertiaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.hover.font'),
  backgroundColor: prop('theme.colors.button.tertiary.hover.background'),
  borderColor: prop('theme.colors.button.tertiary.hover.border'),
})

const appearanceTertiaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.pressed.font'),
  backgroundColor: prop('theme.colors.button.tertiary.pressed.background'),
  borderColor: prop('theme.colors.button.tertiary.pressed.border'),
})

const appearanceTertiaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.disabled.font'),
  backgroundColor: prop('theme.colors.button.tertiary.disabled.background'),
  borderColor: prop('theme.colors.button.tertiary.disabled.border'),
})

const appearanceQuaternaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.default.font'),
  backgroundColor: prop('theme.colors.button.quaternary.default.background'),
  borderColor: prop('theme.colors.button.quaternary.default.border'),
})

const appearanceQuaternaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.hover.font'),
  backgroundColor: prop('theme.colors.button.quaternary.hover.background'),
  borderColor: prop('theme.colors.button.quaternary.hover.border'),
})

const appearanceQuaternaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.pressed.font'),
  backgroundColor: prop('theme.colors.button.quaternary.pressed.background'),
  borderColor: prop('theme.colors.button.quaternary.pressed.border'),
})

const appearanceQuaternaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.quaternary.disabled.font'),
  backgroundColor: prop('theme.colors.button.quaternary.disabled.background'),
  borderColor: prop('theme.colors.button.quaternary.disabled.border'),
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

const appearanceDangerPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.danger.pressed.font'),
  backgroundColor: prop('theme.colors.button.danger.pressed.background'),
  borderColor: prop('theme.colors.button.danger.pressed.border'),
})

const appearanceDangerDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.danger.disabled.font'),
  backgroundColor: prop('theme.colors.button.danger.disabled.background'),
  borderColor: prop('theme.colors.button.danger.disabled.border'),
})

const appearanceGhostDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.default.font'),
  backgroundColor: prop('theme.colors.button.ghost.default.background'),
  borderColor: prop('theme.colors.button.ghost.default.border'),
})

const appearanceGhostHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.hover.font'),
  backgroundColor: prop('theme.colors.button.ghost.hover.background'),
  borderColor: prop('theme.colors.button.ghost.hover.border'),
})

const appearanceGhostPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.pressed.font'),
  backgroundColor: prop('theme.colors.button.ghost.pressed.background'),
  borderColor: prop('theme.colors.button.ghost.pressed.border'),
})

const appearanceGhostDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.disabled.font'),
  backgroundColor: prop('theme.colors.button.ghost.disabled.background'),
  borderColor: prop('theme.colors.button.ghost.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePrimaryPressedStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
    )
  ),
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSecondaryPressedStyles,
      ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryDefaultStyles)
    )
  ),
  tertiary: ifProp(
    prop('disabled', false),
    appearanceTertiaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTertiaryPressedStyles,
      ifProp(prop('hover', false), appearanceTertiaryHoverStyles, appearanceTertiaryDefaultStyles)
    )
  ),
  quaternary: ifProp(
    prop('disabled', false),
    appearanceQuaternaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceQuaternaryPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceQuaternaryHoverStyles,
        appearanceQuaternaryDefaultStyles
      )
    )
  ),
  danger: ifProp(
    prop('disabled', false),
    appearanceDangerDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceDangerPressedStyles,
      ifProp(prop('hover', false), appearanceDangerHoverStyles, appearanceDangerDefaultStyles)
    )
  ),
  ghost: ifProp(
    prop('disabled', false),
    appearanceGhostDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceGhostPressedStyles,
      ifProp(prop('hover', false), appearanceGhostHoverStyles, appearanceGhostDefaultStyles)
    )
  ),
})

export { appearanceStyles }
