import styled         from '@emotion/styled'

import React          from 'react'
import { FC }         from 'react'
import { styleFn }    from 'styled-system'

import { ImageBlock } from '@ui/image'
import { Row }        from '@ui/layout'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { Space }      from '@ui/text'
import { useHover }   from '@ui/utils'

import { CardProps }  from './card.interfaces'

const Image = styled(ImageBlock)<{ hover: boolean }>(
  ({ hover }) =>
    ({
      transition: '.3s',
      transform: hover ? 'scale(0.9)' : 'scale(1)',
    } as unknown as styleFn)
)

const Card: FC<CardProps> = ({ firstName, secondName, location, role, description, imageSrc }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box width={['100%', '100%', 272]} justifyContent={['center', 'center', 'flex-start']}>
      <Column fill>
        <Box
          width='100%'
          // @ts-ignore
          cursor='pointer'
          border={hover ? 'thinBlack' : 'thinWhite'}
          style={{ transition: '.3s' }}
          {...hoverProps}
        >
          <Image src={imageSrc} width='100%' height='100%' hover={hover} />
        </Box>
        <Layout flexShrink={0} flexBasis={16} />
        <Row justifyContent='center'>
          <Text
            fontWeight='bold'
            fontSize='semiGiant'
            color='text.accent'
            textAlign='center'
            lineHeight='extra'
          >
            {firstName}
            <Space />
            {secondName}
          </Text>
        </Row>
        <Layout flexShrink={0} flexBasis={8} />
        <Row justifyContent='center'>
          <Text fontSize='semiRegular' textAlign='center' lineHeight='extra'>
            {role}
          </Text>
        </Row>
        <Layout flexShrink={0} flexBasis={8} />
        <Row justifyContent='center'>
          <Text fontSize='semiRegular' color='text.accent' textAlign='center' lineHeight='extra'>
            {location}
          </Text>
        </Row>
        <Layout flexShrink={0} flexBasis={8} />
        <Row justifyContent='center'>
          <Text fontSize='semiRegular' color='text.accent' textAlign='center' lineHeight='extra'>
            {description}
          </Text>
        </Row>
      </Column>
    </Box>
  )
}

export { Card }
