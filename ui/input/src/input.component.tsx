import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'
import { createTextareaProps }      from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'
import { useEffect }                from 'react'

import { Condition }                from '@ui/condition'
import { Row }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Text }                     from '@ui/text'
import { doNothing }                from '@shared/utils'
import { useHover }                 from '@ui/utils'

import { InputProps }               from './input.interfaces'
import { ShowPasswordAttachment }   from './show-password-attachment'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'
import { labelAppearanceStyles }    from './input.styles'
import { labelShapeStyles }         from './input.styles'
import { textareaStyles }           from './input.styles'
import { placeholderStyles }        from './placeholder-attachment'

export const InputElement = styled.div(baseStyles, shapeStyles, appearanceStyles, textareaStyles)
export const InputPlaceholder = styled(Row)(placeholderStyles)
export const Label = styled(Text)(labelAppearanceStyles, labelShapeStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    size,
    value,
    disabled,
    onChange,
    onChangeNative,
    label,
    textAlign,
    type,
    hint,
    maxLength,
    textarea,
    ...props
  },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)
  const [focus, setFocus] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(true)
  const [hover, hoverProps] = useHover()

  const { containerProps, rawInputProps } = createTextareaProps()

  if (!ref) {
    // eslint-disable-next-line
    ref = useRef(null)
  }

  useEffect(() => {
    const handler = () => setFocus(false)

    if (ref && (ref as any).current) {
      ;(ref as any).current.addEventListener('focusout', handler)

      return () => (ref as any)?.current?.removeEventListener('focusout', handler)
    }

    return doNothing
  }, [ref])

  return (
    <Row>
      <Column fill>
        <Condition match={label !== ''}>
          <Row>
            <Label disabled={disabled}>{label}</Label>
            <Condition match={!!maxLength}>
              <Layout flexGrow={1} />
              <Text fontSize='small' color='text.lightGray' fontWeight='semiBold'>
                {maxLength! - (value?.toString().length || 0)}
              </Text>
            </Condition>
          </Row>
          <Layout flexShrink={0} flexBasis={8} />
        </Condition>
        <InputElement
          {...props}
          {...(textarea && containerProps)}
          textarea={textarea}
          size={size}
          focus={focus}
          disabled={disabled}
          onClick={() => {
            ;(ref as any).current.focus()
          }}
          hover={hover}
          {...hoverProps}
        >
          <RawInput
            ref={ref}
            {...props}
            {...(textarea && rawInputProps)}
            disabled={disabled}
            value={value}
            onChange={changeValue}
            type={!hidden ? 'text' : type}
            onFocus={() => setFocus(true)}
            style={{
              textAlign: textAlign as any,
              ...(textarea && {
                resize: 'none',
                width: '100%',
              }),
            }}
            maxLength={maxLength}
          />
          <ShowPasswordAttachment type={type} hidden={hidden} setHidden={setHidden} />
        </InputElement>
        <Condition match={!!hint}>
          <Layout flexShrink={0} flexBasis={8} />
          <Text fontSize='semiRegular' color='text.lightGray'>
            {hint}
          </Text>
        </Condition>
      </Column>
    </Row>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
