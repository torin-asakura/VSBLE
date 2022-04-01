import { styleFn }    from 'styled-system'
import { ifProp }     from 'styled-tools'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

export const appearanceDefaultHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.default.background,
  borderColor: 'transparent',
})

export const appearanceDefaultHoverHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.default.hover.background,
  borderColor: 'transparent',
})

export const appearanceDefaultDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.default.disabled.background,
  borderColor: 'transparent',
})

export const appearanceCheckedHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.checked.background,
  borderColor: 'transparent',
})

export const appearanceCheckedHoverHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.checked.hover.background,
  borderColor: 'transparent',
})

export const appearanceCheckedDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.checked.disabled.background,
  borderColor: 'transparent',
})

export const shapeNormalSizeHandleStyles: styleFn = () => ({
  width: 32,
  height: 20,
})

export const shapeNormalSizeThumbStyles: styleFn = () => ({
  width: 16,
  height: 16,
})

export const appearanceHandleStyles = ifProp(
  prop('checked', false),
  ifProp(
    prop('disabled', false),
    appearanceCheckedDisabledHandleStyles,
    ifProp(prop('hover', false), appearanceCheckedHoverHandleStyles, appearanceCheckedHandleStyles)
  ),
  ifProp(
    prop('disabled', false),
    appearanceDefaultDisabledHandleStyles,
    ifProp(
      ifProp('hover', false),
      appearanceDefaultHoverHandleStyles,
      appearanceDefaultHandleStyles
    )
  )
)

export const appearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.thumb,
})

export const shapeHandleStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeHandleStyles,
})

export const shapeThumbStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeThumbStyles,
})
