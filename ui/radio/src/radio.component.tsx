import styled               from '@emotion/styled'

import React                from 'react'
import { FC }               from 'react'

import { Box }              from '@ui/layout'

import { RadioProps }       from './radio.interface'
import { baseStyles }       from './radio.styles'
import { shapeStyles }      from './radio.styles'
import { appearanceStyles } from './radio.styles'

const Container = styled(Box)(baseStyles, shapeStyles, appearanceStyles)

const Radio: FC<RadioProps> = ({ ...props }) => (
  <Container>
    <input type='radio' {...props} />
  </Container>
)
export { Radio }
