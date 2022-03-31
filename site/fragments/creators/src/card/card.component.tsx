import styled from '@emotion/styled'
import { styleFn } from 'styled-system'

import React from 'react'
import { FC } from 'react'

import { Row } from '@ui/layout'
import { Box } from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text } from '@ui/text'
import { Space } from '@ui/text'
import { ImageBlock } from '@ui/image'
import { useHover } from '@ui/utils'

import { CardProps } from './card.interfaces'

const Image = styled(ImageBlock)<{ hover: boolean }>(({ hover }) => ({
  transition: 0.3,
  transform: hover ? 'scale(0.9)' : 'scale(1)'
}) as unknown as styleFn)

const Card: FC<CardProps> = ({ firstName, secondName, location, role, description }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box width={272} height={504} {...hoverProps}>
      <Column fill>
        <Box
          width='100%'
          // @ts-ignore
          cursor='pointer'
          border={`1px solid ${hover ? 'black' : 'transparent'}`}
        >
          <Image
            src='https://source.unsplash.com/random'
            width='100%'
            height='100%'
            hover={hover}
          />
        </Box>
        <Layout flexShrink={0} flexBasis={16} />
        <Row justifyContent='center'>
          <Text fontWeight='bold' fontSize='semiGiant' color='text.accent' textAlign='center'>
            {firstName}
            <Space />
            {secondName}
          </Text>
        </Row>
        <Layout flexShrink={0} flexBasis={8} />
        <Row justifyContent='center'>
          <Text fontSize='semiRegular' textAlign='center' color='text.gray'>
            {role}
          </Text>
        </Row>
        <Layout flexShrink={0} flexBasis={8} />
        <Row justifyContent='center'>
          <Text fontSize='semiRegular' color='text.accent' textAlign='center'>
            {location}
          </Text>
        </Row>
        <Layout flexShrink={0} flexBasis={8} />
        <Row justifyContent='center'>
          <Text fontSize='semiRegular' color='text.accent' textAlign='center'>
            {description}
          </Text>
        </Row>
      </Column>
    </Box>
  )
}

export { Card }
