import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { ImageBlock } from '@ui/image'

import { CardProps }  from './card.interfaces'

const Card: FC<CardProps> = ({ imageSrc }) => (
  <Box width={['100%', '100%', 272]} justifyContent={['center', 'center', 'flex-start']}>
    <Column fill>
      <Box
        width='100%'
        // @ts-ignore
        cursor='pointer'
      >
        <ImageBlock src={imageSrc} width='100%' height='100%'/>
      </Box>
      <Layout flexShrink={0} flexBasis={16}/>
    </Column>
  </Box>
)

export { Card }
