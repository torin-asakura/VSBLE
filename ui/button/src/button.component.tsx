import styled            from '@emotion/styled'
import { Content }       from '@atls-ui-parts/button'

import React             from 'react'
import { FC }            from 'react'
import { forwardRef }    from 'react'
import { useState }      from 'react'

import { useHover }      from '@ui/utils'

import { ButtonProps }   from './button.interfaces'
import { baseStyles }    from './button.styles'
import { shapeStyles }   from './button.styles'
import { contentStyles } from './button.styles'
import { variantStyles } from './button.styles'
import { fillStyles }    from './button.styles'

export const ButtonElement = styled('button')(
  baseStyles,
  contentStyles,
  shapeStyles,
  variantStyles,
  fillStyles
)

export const Button: FC<ButtonProps> = forwardRef(({ children, onClick, ...props }, ref) => {
  const [hover, hoverProps] = useHover()
  const [pressed, setPressed] = useState<boolean>(false)

  return (
    <ButtonElement
      hover={hover}
      active={pressed}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...hoverProps}
      {...props}
      ref={ref}
    >
      <Content divider={8}>{children}</Content>
    </ButtonElement>
  )
})
