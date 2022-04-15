import styled               from '@emotion/styled'

import React                from 'react'
import { forwardRef }       from 'react'

import { Box }              from '@ui/layout'

import { baseStyles }       from './radio.styles'
import { shapeStyles }      from './radio.styles'
import { appearanceStyles } from './radio.styles'

const Container = styled(Box)(baseStyles, shapeStyles, appearanceStyles)

const RadioWithoutRef = ({ children, ...props }, ref) => (
  <Container>
    <input type='radio' ref={ref} {...props} />
  </Container>
)

const Radio = forwardRef(RadioWithoutRef)

export { Radio }
