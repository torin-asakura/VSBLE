import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'

import { Condition }                from '@ui/condition'
import { Row }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Text }                     from '@ui/text'
import { useHover }                 from '@ui/utils'

import { InputProps }               from './input.interfaces'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'

export const InputElement = styled.div(baseStyles, shapeStyles, appearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { size, value, disabled, onChange, onChangeNative, label, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)
  const [focus, setFocus] = useState<boolean>(false)
  const [hover, hoverProps] = useHover()

  if (!ref) {
    // eslint-disable-next-line
    ref = useRef(null)
  }

  return (
    <Row>
      <Column fill>
        <Condition match={label !== ''}>
          <Text color='text.semiBlack' fontWeight='semiBold' fontSize='semiRegular'>
            {label}
          </Text>
          <Layout flexShrink={0} flexBasis={8} />
        </Condition>
        <InputElement
          {...props}
          size={size}
          focus={focus}
          onClick={() => {
            ;(ref as any).current.focus()
          }}
          hover={hover}
          {...hoverProps}
        >
          <RawInput
            ref={ref}
            {...props}
            disabled={disabled}
            value={value}
            onChange={changeValue}
            onFocus={() => setFocus(!focus)}
          />
        </InputElement>
      </Column>
    </Row>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
