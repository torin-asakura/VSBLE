import styled            from '@emotion/styled'
import { Content }       from '@atls-ui-parts/button'

import React             from 'react'
import { FC }            from 'react'
import { forwardRef }    from 'react'

import { ButtonProps }   from './button.interfaces'
import { baseStyles }    from './button.styles'
import { shapeStyles }   from './button.styles'
import { contentStyles } from './button.styles'
import { variantStyles } from './button.styles'

export const ButtonElement = styled('button')(baseStyles, contentStyles, shapeStyles, variantStyles)

export const Button: FC<ButtonProps> = forwardRef(({ children, ...props }, ref) => (
  <ButtonElement {...props} ref={ref}>
    <Content divider={8}>{children}</Content>
  </ButtonElement>
))
