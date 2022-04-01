import styled                              from '@emotion/styled'
import { HandleElement }                   from '@atls-ui-parts/switch'
import { baseHandleStyles } from '@atls-ui-parts/switch'
import { ThumbElement }                    from '@atls-ui-parts/switch'
import { useSwitch }                       from '@atls-ui-parts/switch'
import { baseThumbStyles }                 from '@atls-ui-parts/switch'
import { ifDisabledThumbModifier }         from '@atls-ui-parts/switch'
import { thumbMotionVariants }             from '@atls-ui-parts/switch'

import React                               from 'react'
import { useRef }                          from 'react'

import { ToggleProps }                     from './toggle.interfaces'
import { ToggleSize }                      from './toggle.interfaces'
import { appearanceHandleStyles }          from './toggle.styles'
import { appearanceThumbStyles }           from './toggle.styles'
import { shapeThumbStyles }                from './toggle.styles'
import { shapeHandleStyles }               from './toggle.styles'

const Thumb = styled(ThumbElement)<{ size?: ToggleSize }>(
  baseThumbStyles,
  appearanceThumbStyles,
  shapeThumbStyles,
  ifDisabledThumbModifier()
)

const Element = styled(HandleElement)(baseHandleStyles, appearanceHandleStyles, shapeHandleStyles)

const Toggle = ({ disabled, checked: defaultValue, onChange, size }: ToggleProps) => {
  const node = useRef<HTMLButtonElement>(null)
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <Element ref={node} onClick={setChecked} checked={checked} size={size}>
      <Thumb
        disabled={disabled}
        checked={checked}
        size={size}
        variants={{
          ...thumbMotionVariants,
          checked: {
            left: 12,
          },
        }}
      />
    </Element>
  )
}

export { Toggle }
